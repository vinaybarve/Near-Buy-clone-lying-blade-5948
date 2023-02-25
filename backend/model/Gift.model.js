const mongoose = require('mongoose');

const giftSchema = mongoose.Schema({
    name: String,
    address: String,
    price: Number,
    rating: Number,
    phoneno:Number,
    image:String,
    order:Array
})

const GiftModel = mongoose.model('Gift', giftSchema);

module.exports={
    GiftModel
}