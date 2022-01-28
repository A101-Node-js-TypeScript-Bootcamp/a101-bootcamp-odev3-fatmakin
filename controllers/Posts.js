const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
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
    res.send({status:true});
}
exports.fetchAll = async (req,res) => {
    const response = await categoryService.fetchAll();
    res.send(response); 
}
exports.fetchSingle = async (req,res) => {
    const response = await categoryService.fetchSingle(req.params); 
    res.send(response);
}
exports.fetchisDiscount = async (req,res) => {
    const response = await categoryService.fetchisDiscount(req.params); 
    res.send(response);
}