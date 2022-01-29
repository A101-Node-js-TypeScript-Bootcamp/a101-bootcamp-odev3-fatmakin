const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
const postsService = require('../services/posts')

const AWS = require('aws-sdk') // aws sdk
const uuidv4 = require('uuid') // id value encryption
const postsService = require('../services/posts')

// database connection
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your access key",
    secretAccessKey: "your secret key",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient(); //The document client simplifies working with items in Amazon DynamoDB by abstracting away the notion of attribute values
var table = "Products"; // table name

exports.add = async (req,res) => { // database data insert
    const response = await postsService.add(req.body); //
    console.log(response);
    res.send({status:true});
}
exports.fetchAll = async (req,res) => { // database data select 
    const response = await categoryService.fetchAll();
    console.log(response);
    res.send({status:true}); 
}
exports.fetchSingle = async (req,res) => {// filter by productId
    const response = await categoryService.fetchSingle(req.params); 
    console.log(response);
    res.send({status:true});
}
exports.fetchisDiscount = async (req,res) => { // filter by discount
    const response = await categoryService.fetchisDiscount(req.params); 
    console.log(response);
    res.send({status:true});
}
exports.update = async (req,res) => { // update function to change stock value by productId
    const response = await postsService.update();
    console.log(response);
    res.send({status:true});
}

exports.delete = async (req,res) => { // delete  by productıd but If there is an isdiscount value, it will not delete it
    const response = await postsService.delete();
    console.log(response);
    res.send({status:true});
}
