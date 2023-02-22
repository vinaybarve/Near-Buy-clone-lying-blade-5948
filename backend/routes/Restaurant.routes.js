const express = require('express');

const {RestaurantModel} = require('../model/Restaurant.model');

const {fieldsAnalyzer} = require('../middleware/fieldsAnalyzer.middleware');

const app = express();
app.use(express.json());

const restaurantRouter = express.Router();

restaurantRouter.get('/', async(req, res) => {
     let query = {};

    if(req.query.location){
        query.location = req.query.location;
    }
    if(req.query.min && req.query.max){
        query = { rating: {$gte: req.query.min, $lte: req.query.max}};
    }
    try{
        const sortOrder = req.query.sort === 'desc' ? -1 : 1;
        const restaurants = await RestaurantModel.find(query).sort({ price: sortOrder });
        res.send(restaurants);
    }
    catch(err){
        send.send(err);
    }
})


restaurantRouter.get('/:id', async(req, res) => {
    try{
        const restaurant = await RestaurantModel.findById(req.params.id);
        if(!restaurant){
            return res.status(404).send();
        }
        res.send(restaurant);
    }
    catch(err){
        res.status(400).send(err);
    }
});


restaurantRouter.use('/addrestaurant', fieldsAnalyzer);

restaurantRouter.post('/addrestaurant', async (req, res)=>{
    const restaurant = new RestaurantModel(req.body);
    try{
        await restaurant.save();
        res.status(200).send(restaurant);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});


restaurantRouter.patch('/update/:id', async(req, res) => {
    const ID = req.params.id;

    const payload = req.body;
    try{
        await RestaurantModel.findByIdAndUpdate({_id: ID}, payload);
        res.send({"MSG": "updated"});
    }
    catch(err){
        res.status(400).send(err);
    }
});

restaurantRouter.delete('/delete/:id', async(req, res) => {
    const ID = req.params.id;

    try{
        await RestaurantModel.findByIdAndDelete({_id: ID});
        res.send({"MSG": "Deleted"});
    }
    catch(err){
        res.status(400).send(err);
    }
});

module.exports ={
    restaurantRouter
}