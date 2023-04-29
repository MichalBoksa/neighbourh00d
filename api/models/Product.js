const mongoose = require("mongoose");
//TODO CHECK THIS SHIT
//const { boolean } = require("webidl-conversions");

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        categories: {type: Array},
        price: {type: String, required: true},
        size: {type: Array, required: true},
        inStock:{type:Boolean, required:true}
    },
    //TODO CHECK THIS SHIT
    {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);