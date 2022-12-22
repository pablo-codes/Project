const express = require("express");
const app = express();
const mongoose = require("mongoose")
const exphbs = require("express-handlebars");
const path = require('path')
const dotenv = require('dotenv')
const cookie = require('cookie-parser')
const product = require('./models/productSchema')
const multer = require('multer')
const cors = require('cors')
const auth = require('./middleware/auth')
const adminauth = require('./middleware/adminauth')

const { index, allTopics, getTopic, allImages, addTopic, getImages, updateTopic, deleteTopicAndImages, searchImages, searchTopics, addImage, getALLImages, updateImage, deleteImage, allBlogs } = require('./controllers/Usercontroller')
const { admin, admins, users, allAdminImages, allAdminTopics, deleteUserTopicAndImages, searchUser, searchAdmin } = require('./controllers/Admincontroller')
const { login, register, registerUser, loginUser } = require("./controllers/LoginController")


const upload = multer({ dest: path.join(__dirname, '../files') })
dotenv.config({ path: path.join(__dirname, './config.env') })




mongoose.connect("mongodb://127.0.0.1:27017/blogsystemNG").then(() => {
  console.log("DB Connected Successfully")
}).catch((err) => {
  console.log("connection failure")
})




var corsOptions = {
  origin: 'http://localhost:3000'
};

//  Middlewares

app.use(cors(corsOptions));
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    },
  })
);


app.set("view engine", ".hbs");


//  Routes
app.get("/", auth, index);

app.get('/admin', adminauth, admin)

app.get("/all-blogs", allBlogs)

app.get("/all-topics", auth, allTopics)

app.get("/get-topic/:id", getTopic)

app.get("/all-images", auth, allImages)

app.get('/register', register);

app.get('/login', login);

app.post("/add-topic", upload.any(), auth, addTopic)

app.post("/add-image", upload.any(), auth, addImage)

app.post('/register-user', registerUser);

app.post("/login-check", loginUser);



app.get("/add-topic", (req, res) => {

  res.render("add-topic");
});
app.get("/add-image", (req, res) => {

  res.render("add-image");
});


app.get("/admins", adminauth, admins)



app.get("/users", adminauth, users)

app.get("/admin-topic", adminauth, allAdminTopics)
app.get("/admin-images", adminauth, allAdminImages)

app.get("/delete/:id", adminauth, deleteUserTopicAndImages)

app.get("/view-image/:id/:name", upload.any(), getImages)
app.post("/add-topic", upload.any())

app.put("/edit-topic/:id", updateTopic)
app.put("/edit-image/:id", updateImage)
app.get("/get-image/:id", getALLImages)

app.get("/delete-topic/:id", deleteTopicAndImages)
app.get("/delete-image/:id", deleteImage)


app.post("/search", searchTopics)

app.post("/search-images", searchImages)
app.post("/search-user", searchUser)
app.post("/search-admin", searchAdmin)


// Port
const port = 2500;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
