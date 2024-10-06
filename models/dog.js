const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema ({
    name: String,
    breed: String,
    age: Number,
    isCute: Boolean
})

const Dog = mongoose.model("Dog", dogSchema);
module.exports = Dog;