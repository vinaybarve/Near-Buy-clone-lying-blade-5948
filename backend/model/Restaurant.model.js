const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name: String,
    address: String,
    rating: Number,
    price: Number,
    phoneno: Number,
    location: String,
    // deals: String,
    image: String,
    active: Boolean
})

const RestaurantModel = mongoose.model('restaurant', restaurantSchema);

module.exports={
    RestaurantModel
}