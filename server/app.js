
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose")
const exphbs = require("express-handlebars");
const path = require('path')
const app = express();
const user = require("./models/schema")
const cors = require('cors')
const product = require('./models/productSchema')
const gridFile = require('./models/GridFile')
const auth = require('./middleware/auth')
const adminauth = require('./middleware/adminauth')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const dotenv = require('dotenv')
const multer = require('multer')
const { index, allTopics, getTopic, allImages, addTopic, getImages, updateTopic, deleteTopicAndImages, searchImages, searchTopics, addImage } = require('./controllers/Usercontroller')
const { admin, admins, users, allAdminImages, allAdminTopics,deleteUserTopicAndImages } = require('./controllers/Admincontroller')
const { login, register, registerUser, loginUser } = require("./controllers/LoginController")
const methodOverride = require('method-override');

const upload = multer({ dest: path.join(__dirname, '../files') })
dotenv.config({ path: path.join(__dirname, './config.env') })




mongoose.connect("mongodb://127.0.0.1:27017/usersystemNG").then(() => {
  console.log("DB Connected Successfully")
}).catch((err) => {
  console.log("connection failure")
})




var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"))

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


app.get("/:name", auth, index);

app.get('/admin/:name', adminauth, admin)

app.get("/all-users", async (req, res) => {

  const all = await product.find({})


  res.send(all);
})

app.get("/all-writers", auth, allTopics)

app.get("/get-topic/:id", cors(corsOptions), getTopic)

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

app.get("/delete-topic/:id", deleteTopicAndImages)


app.post("/search", searchTopics)

app.post("/search-images", searchImages)

const port = 2500;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
