
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
        console.log(error)
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
            description: body.description,
            features: body.features,
        })

        if (req.files) {
            const promises = req.files.map(async (file) => {
                const names = file.originalname
                const newname = names.replace(/\s+/g, "")
                const check = await gridFile.findOne({ $and: [{ aliases: id }, { filename: newname }] })
                if (check) {

                    const gridid = await product.findOneAndUpdate({ title: req.body.title }, { $push: { gridfileid: check.id } }, { upsert: true })
                    const gridname = await product.findOneAndUpdate({ title: req.body.title }, { $push: { gridfilename: check.filename } }, { upsert: true })
                    console.log(`The image ${check.filename} already exists`)
                }
                else {
                    const fileStream = fs.createReadStream(file.path)


                    // upload file to gridfs
                    const GridFile = new gridFile({ filename: newname, aliases: req.cookies.user })
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
    const id = req.cookies.user
    if (req.files) {
        const promises = req.files.map(async (file) => {
            const names = file.originalname
            const newname = names.replace(/\s+/g, "")
            console.log(newname)
            const check = await gridFile.findOne({ $and: [{ aliases: id }, { filename: newname }] })
            if (check) {


                console.log(`The image ${check.filename} already exists`)
            }
            else {
                const fileStream = fs.createReadStream(file.path)


                // upload file to gridfs
                const GridFile = new gridFile({ filename: newname, aliases: id })
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
    const edit = await gridFile.findOne({ _id: newid[1] })
    const GridFile = await gridFile.findById(edit.id)
    res.attachment(newname[1])
    await GridFile.downloadStream(res)
}

// Update's topic with axios
const updateTopic = async (req, res) => {
    const id = req.params.id;

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

const deleteImage = async (req, res) => {
    try {
        const id = req.cookies.user
        const find = req.params.id




        const newfind = find.split(":", 2)
        const check = await product.find({ gridfileid: newfind[1] })
        if (check.length > 1) {
            const iname = await gridFile.findOne({ _id: newfind[1] })
            const mapf = await check.map((el) => {
                return el.title
            })
            console.log(`${iname.filename} is being used at ${mapf}`)
            res.redirect('/all-images')
        } else {

            await gridFile.findByIdAndDelete(newfind[1])
            res.redirect('/all-images')
        }
    } catch (error) {
        console.log(error)
        res.redirect('/all-images')
    }
}

// Delete's topic and all related images
const deleteTopicAndImages = async (req, res) => {

    try {
        const find = req.params.id
        const give = req.cookies.user
        const newfind = find.split(":", 2)
        const searching = await user.findOne({ _id: give })


        const found = await product.findOne({ _id: newfind[1] })

        const check1 = await product.find({ gridfileid: found.gridfileid[0] })
        const check2 = await product.find({ gridfileid: found.gridfileid[1] })




        if (found) {
            if (check1.length > 1 || check2.length > 1) {
                const iname1 = await gridFile.findOne({ _id: found.gridfileid[0] })
                const iname2 = await gridFile.findOne({ _id: found.gridfileid[1] })

                const mapf1 = await check1.map((el) => {
                    return el.title
                })
                const mapf2 = await check2.map((el) => {
                    return el.title
                })
                if (mapf1) {
                    console.log(`${iname1.filename} is being used at ${mapf1}`)
                } else {
                    console.log(`${iname2.filename} is being used at ${mapf2}`)
                }


            } else {
                await found.gridfileid.map((el) => {
                    gridFile.findByIdAndDelete(el)
                })
            }

            const del = await product.findOneAndDelete({ _id: newfind[1] })

            if (searching.role == "admin") {
                res.redirect('/admin-topics')
            }
            else {
                res.redirect('/all-topics')
            }
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
        if (find.role == "admin") {
            const all = await product.find({ title: { $regex: search, $options: "i" } })
            res.render("all-topics", { all, layout: "adminlay" });
        }
        else {
            const all = await product.find({ $and: [{ author: find.username }, { title: { $regex: search, $options: "i" } }] })
            res.render("all-topics", { all })
        }

    } catch (error) {
        console.log(error)
        res.redirect("/all-topics")
    }
}

//Searches for images
const searchImages = async (req, res) => {

    try {
        const users = req.cookies.user
        const search = req.body.search
        const verify = await user.findOne({ _id: users })
        if (verify.role == "admin") {
            const all = await gridFile.find({ filename: { $regex: search, $options: "i" } })
            res.render("all-images", { all, layout: "adminlay" });
        } else {
            const all = await gridFile.find({ $and: [{ aliases: users }, { filename: { $regex: search, $options: "i" } }] })
            res.render("all-images", { all })
        }



    } catch (error) {
        console.log(error)
    }

}
module.exports = { index, allTopics, getTopic, allImages, addTopic, addImage, getImages, getALLImages, updateImage, updateTopic, deleteTopicAndImages, deleteImage, searchImages, searchTopics }