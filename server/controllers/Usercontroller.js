
const fs = require("fs");
const jwt = require('jsonwebtoken')
const path = require('path')
const multer = require('multer')
const product = require('../models/productSchema')
const gridFile = require('../models/GridFile')
const user = require('../models/schema')

const upload = multer({ dest: path.join(__dirname, '../files') })

// Dashboard
const index = async (req, res) => {
    try {
        const users = req.cookies.user
        const topics = await user.findOne({ _id: users })

        const alltotal = await product.count({ author: topics.username });
        const allImages = await gridFile.count({ aliases: users })
        const username = topics.username.toUpperCase()

        console.log(news, stuff)
        res.render("index", { alltotal, topics, allImages, username });
    } catch (error) {
        console.log(error)

        res.redirect("/login")
    }

}

// Get's all topics related to user
const allTopics = async (req, res, next) => {
    try {
        const id = req.cookies.user

        const get = await user.findOne({ _id: id })
        const all = await product.find({ author: get.username })

        const getDate = new Date(get.createdAt).toLocaleString()

        res.render("all-topics", { all });
    } catch (error) {

        res.redirect("/")
    }
}



const getALLImages = async (req, res) => {

    const find = req.params.id

    const newfind = find.split(":", 2)

    const get = await product.findOne({ _id: newfind[1] })
    const news = await user.findOne({ username: get.author })

    const all = await gridFile.find({ aliases: news._id })


    res.send(all);
}


// Get's a topic with axios
const getTopic = async (req, res) => {
    const find = req.params.id

    const newfind = find.split(":", 2)


    const edit = await gridFile.find({})

    edit.map(async (el) => {
        const GridFile = await gridFile.findById(el.id)

        if (GridFile) {

            // put in the relative path of the folder(i.e local folder, internet folder)
            const fileStream = fs.createWriteStream(path.join(__dirname, `../../client/src/images/dynamic/${GridFile.filename}`))
            await GridFile.download(fileStream)




        } else {
            // file not found
            res.status(404).json({ error: 'file not found' })
        }
    }
    )

    const all = await product.findOne({ _id: newfind[1] })

    res.send(all)
}

// Get's all images
const allImages = async (req, res) => {
    try {
        const id = req.cookies.user



        const all = await gridFile.find({ aliases: id })


        res.render("all-images", { all });
    } catch (error) {
        res.redirect("/")

    }
}

// Add's a topic 
const addTopic = async (req, res, next) => {
    try {
        const body = req.body;
        const id = req.cookies.user
        const get = await user.findOne({ _id: id })

        const all = await product.create({
            title: body.title,
            author: get.username,
            role: body.role,
            description: body.description,
            features: body.features,
        })

        if (req.files) {
            const promises = req.files.map(async (file) => {
                const check = await gridFile.findOne({ filename: file.originalname })
                if (check) {
                    const gridid = await product.findOneAndUpdate({ title: req.body.title }, { $push: { gridfileid: check.id } }, { upsert: true })
                    const gridname = await product.findOneAndUpdate({ title: req.body.title }, { $push: { gridfilename: check.filename } }, { upsert: true })
                    console.log(`The image ${check.filename} already exists`)
                }
                else {
                    const fileStream = fs.createReadStream(file.path)


                    // upload file to gridfs
                    const GridFile = new gridFile({ filename: file.originalname, aliases: req.cookies.user })
                    const uploaded = await GridFile.upload(fileStream)
                    fs.unlinkSync(file.path)

                    const gridid = await product.findOneAndUpdate({ title: req.body.title }, { $push: { gridfileid: uploaded.id } }, { upsert: true })
                    const gridname = await product.findOneAndUpdate({ title: req.body.title }, { $push: { gridfilename: uploaded.filename } }, { upsert: true })
                }

            })

            await Promise.all(promises)
        }
        res.redirect("all-topics")
    } catch (error) {
        res.redirect("/")

    }


}

// Add's an image
const addImage = async (req, res) => {
    if (req.files) {
        const promises = req.files.map(async (file) => {
            const check = await gridFile.findOne({ filename: file.originalname })
            if (check) {

                console.log(`The image ${check.filename} already exists`)
            }
            else {
                const fileStream = fs.createReadStream(file.path)


                // upload file to gridfs
                const GridFile = new gridFile({ filename: file.originalname, aliases: req.cookies.user })
                const uploaded = await GridFile.upload(fileStream)
                fs.unlinkSync(file.path)


            }

        })

        await Promise.all(promises)
    }
    res.redirect("/all-images")
}

// Download's an image
const getImages = async (req, res) => {
    const { name, id } = req.params


    const newid = id.split(":", 2)
    const newname = name.split(":", 2)
    const edit = await gridFile.findOne({ id: newid[1] })
    const GridFile = await gridFile.findById(edit.id)
    res.attachment(newname[1])
    await GridFile.downloadStream(res)
}

// Update's topic with axios
const updateTopic = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const newid = id.split(":", 2)

    product.findOneAndUpdate({ _id: newid[1] }, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
}
const updateImage = async (req, res) => {
    const id = req.params.id;
    const { array3, array4 } = req.body


    const newid = id.split(":", 2)
    const get = await product.findOne({ _id: newid[1] })


    if (array3[0]) {
        const newarray3 = array3.split(",", 2)

        get.gridfilename.set(0, newarray3[0])
        get.gridfileid.set(0, newarray3[1])
        await get.save()


    }

    if (array4[0]) {
        const newarray4 = array4.split(",", 2)
        get.gridfilename.set(1, newarray4[0])
        get.gridfileid.set(1, newarray4[1])
        await get.save()

    }





}

// Delete's topic and all related images
const deleteTopicAndImages = async (req, res, nxt) => {

    try {
        const find = req.params.id

        const newfind = find.split(":")

        const found = await product.findOne({ _id: newfind[1] })


        if (found) {
            await found.gridfileid.map((el) => {
                gridFile.findByIdAndDelete(el)
            })

            const del = await product.findOneAndDelete({ _id: found })
            res.redirect('/all-topics')
        }
    } catch (err) {

        console.log(err)
        res.redirect('/all-topics')
    }
}

//Searches for topic
const searchTopics = async (req, res) => {
    try {
        const users = req.cookies.user
        const search = req.body.search
        const find = await user.findOne({ _id: users })
        const searching = await product.find({ $and: [{ author: find.username }, { title: search }] })
        res.render("searchpage", { searching })
    } catch (error) {
        console.log(error)
    }
}

//Searches for images
const searchImages = async (req, res) => {
    const users = req.cookies.user
    const search = req.body.search

    const searching = await gridFile.find({ $and: [{ aliases: users }, { filename: search }] })
    try {
        const users = req.cookies.user


    } catch (error) {
        console.log(error)
    }
    res.render("searchpage-images", { searching })
}
module.exports = { index, allTopics, getTopic, allImages, addTopic, addImage, getImages, getALLImages, updateImage, updateTopic, deleteTopicAndImages, searchImages, searchTopics }