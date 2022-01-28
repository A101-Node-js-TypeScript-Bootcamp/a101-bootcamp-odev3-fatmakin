const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your access key",
    secretAccessKey: "your secret access key",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "Products"; // table name
exports.add = async (params)=>{
    const items = { 
        TableName : table,
        Item: { // get the data values ​​to be added with the parameter
            productId: uuidv4(),
            stock:params.stock,
            productName:params.productName,
            isDiscount:params.isDiscount,
        
        category:{
            categoryId:params.category.categoryId,
            categoryName:params.category.categoryName

        }
    }
    }
    try {
        await docClient.put(items).promise();
        return {
            status: true,
            message: 'Successfully added'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

exports.fetchAll = async () => { // all data list
    const  items = {
        TableName:table
    };
    
    try {
        const data = await docClient.scan(items).promise();
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
exports.fetchSingle = async (params) => { //  data list by productıd
    var items = {
        TableName: table,
        Key:{ // get the productid value with the parameter
            productId : params.productId
        }
    };
    try {
        const data = await docClient.get(items).promise();
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
exports.fetchisDiscount = async (params) => { // data list isdiscount
    var items = {
        TableName: table,
        Key:{ //get the isdiscount value with the parameter
            isDiscount : params.isDiscount
        }
    };
    try {
        const data = await docClient.get(items).promise();
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
exports.delete = async (params) => { // delete  by productıd but If there is an isdiscount value, it will not delete it
    var items = {
        TableName:table,
        Key:{
            productId : params.productId
        },
        ConditionExpression:"isDiscount=:isDiscount",
        ExpressionArttributeValues:{
            ":isDiscount":0,
        }
    };
    try {
         await docClient.delete(items).promise();
        return {
            status: true,
            message: 'Successfully deleted'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
exports.update = async (params) => { //Update the stock value by productID
    var items = {
        TableName:table,
        Key:{
            stock: params.stock,
        },
    UpdateExpression: "set stock = :stock", //stock value parameter
    ExpressionAttributeValues:{
        ":productId":params.productId,
    },
    ReturnValues:"UPDATED_NEW"
   };
    try {
        const data = await docClient.update(items).promise();
        return {
            status: true,
            data: data,
            message: 'Successfull update'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
