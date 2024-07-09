const mongoose = require('mongoose');

const main = async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema= new mongoose.Schema({    //way to make schema
        name:String
    });
    const ProductModel= mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:'m80',price:20});    //this price will not print in dbase.coz of schema valiadtions
    let result = await data.save();
    console.log(result);
}
main();