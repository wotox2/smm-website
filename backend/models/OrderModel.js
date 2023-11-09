const mongoose = require("mongoose");
const { isURL, isCurrency } = require("../lib/validator");


const OrderModel = mongoose.Schema({
    serviceID: {
        type: String,
        required: [true, "Please Enter serviceID"],
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please Enter userID"],
    },
    link: {
        type: String,
        required: [true, "Please Enter Link"],
        validate: [isURL, "Enter Valid Link"],
    },
    quantity: {
        type: Number,
        required: [true, "Please Enter Quantity"],
    },
    charge: {
        type: Number,
        required: [true, "Please Enter Charge"],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: "On Progress"
    }
})

module.exports = mongoose.model("Order", OrderModel)