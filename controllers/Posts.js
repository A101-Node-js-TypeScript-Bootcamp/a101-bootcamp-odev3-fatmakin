const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
const postsService = require('../services/posts')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAUXPXJZK2YVNNPDJQ",
    secretAccessKey: "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",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "Products";

exports.add = async (req,res) => {
    const response = await postsService.add(req.body); 
    res.send({status:true});
}
exports.fetchAll = async (req,res) => {
    const response = await categoryService.fetchAll();
    res.send(response); 
}
/*exports.fetchSingle = async (req,res) => {
    const response = await categoryService.fetchSingle(req.params); //reqbody görmem lazım.
    res.send(response);
}
exports.fetchisDiscount = async (req,res) => {
    const response = await categoryService.fetchisDiscount(req.params); 
    res.send(response);
}*/