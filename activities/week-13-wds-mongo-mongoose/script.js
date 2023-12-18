const mongoose = require("mongoose");
const User = require("./User");

const uri = "mongodb+srv://cclUser:superSecurePassword@colorcodedlabs.jnwokit.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

run();
async function run() {
    const rubyUser = await User.create({
        name: "Ruby",
        age: 2,
        hobbies: ["long walks on the beach", "drinking from the skulls of my enemies"],
        address: {
            street: "90210 Hollywood Ave"
        }
    });

    console.log(rubyUser);
}