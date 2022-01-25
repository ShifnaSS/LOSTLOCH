const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.hypiv.mongodb.net/LOSTLOCH?retryWrites=true&w=majority');//'mongodb://localhost:27017/MyLibraryMain'

const schema = mongoose.Schema;

const ProductSchema = new schema({
    productId:String,
    batchId :String,
    distillerName :String,
    bottlingTime :String
});

var products = mongoose.model('products',ProductSchema);
module.exports = products;