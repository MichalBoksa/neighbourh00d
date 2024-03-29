const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userData: [
            {
                name:{
                    type:String,
                    required:true
                },
                email:{
                    type:String,
                    required:true
                },
                phoneNumber:{
                    type:String,
                    required:true
                },
                addressLine1:{
                    type:String,
                    required:true
                },
                addressLine2:{
                    type:String,
                    required:false
                },
                city:{
                    type:String,
                    required:true
                },
                zipCode:{
                    type:String,
                    required:true
                },
                country:{
                    type:String,
                    required:true
                },
            }
        ],
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
        ],
        amount: {type: Number, required: true},
        status: {type: String, default: "pending"}
       
    },
    //TODO CHECK THIS SHIT
    {timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);