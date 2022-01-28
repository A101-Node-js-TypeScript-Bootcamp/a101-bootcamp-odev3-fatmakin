const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAUXPXJZK2YVNNPDJQ",
    secretAccessKey: "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",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "Products";
exports.add = async (params)=>{
    const items = {
        TableName : table,
        Item: {
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

exports.fetchAll = async () => {
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
exports.fetchSingle = async (params) => { 
    var items = {
        TableName: table,
        Key:{
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
exports.fetchisDiscount = async (params) => { 
    var items = {
        TableName: table,
        Key:{
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
exports.delete = async (params) => {
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
exports.update = async (params) => {
    var items = {
        TableName:table,
        Key:{
            productId : params.productId,
        },
    UpdateExpression: "set stock = :stock",
    ExpressionAttributeValues:{
        ":categoryName":params.categoryName,
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