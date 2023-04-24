const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        products: [
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default:1
                }
            }
        ]
       
    },
    //TODO CHECK THIS SHIT
    {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);