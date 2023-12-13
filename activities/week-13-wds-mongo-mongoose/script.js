const mongoose = require("mongoose");
const User = require("./User");

const uri = "";
mongoose.connect(uri);

run();
async function run() {
    const userSierra = new User({ name: "Sierra", age: 26 })
    await userSierra.save();
    console.log(userSierra);

    const userChiron = await User.create({name: "Chiron", age: 9})
    userChiron.age = 9001;
    await userChiron.save();
    console.log(userChiron);
}