
const fieldsAnalyzer = (req, res, next) => {
    const { name, address, rating, price, phoneno, location, image } = req.body;

    if( !name || !price || !address || !rating || !phoneno || !location || !image){
        return res.status(400).send({"err": "Few fields are missing, cannot process the request"});
    }
    next();
}


module.exports ={
    fieldsAnalyzer
}