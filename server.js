const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.urlencoded({ extended: false }));

const Dog = require("./models/dog.js");

mongoose.connect(process.env.MONGODB_URI); 
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})


app.get('/', async (req, res) => {
  res.render("index.ejs");
});

app.get("/dogs", async (req, res) => {
  const allDogs = await Dog.find();
  res.render("dogs/index.ejs", { dogs: allDogs })
});

app.get("/dogs/new", (req, res) => {
  res.render("dogs/new.ejs")
});

app.post("/dogs", async (req, res) => {
  if (req.body.isCute === "on") {
    req.body.isCute = true;
  } else {
    req.body.isCute = false;
  }
  await Dog.create(req.body);
  res.redirect("/dogs/new");
});

app.get('/dogs', (req, res) => {
  res.render("index.ejs");
})


app.post("/dogs", async (req, res) => {
  console.log(req.body);
  res.redirect("/dogs/new");
});


app.listen(3000);