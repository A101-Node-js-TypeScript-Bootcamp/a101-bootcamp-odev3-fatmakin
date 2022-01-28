
# CRUD operations with AWS DynamoDB and Node.js

This repo includes basic CRUD operations with AWS DynamoDB and NodeJS.It has been prepared as a practice of A101 Nodejs bootcamp.

## Used Technologies

**Client:** Postman
 
**Server:** Node,Express
 
**Packages:** Express, Nodemon, uuidv4,aws-sdk



  
## Structure
+---controllers
 
|   |   Posts.js
 
+---routes
 
|   +---posts
 
|   |       posts.js 
 
 
|   |   api.js
 
+---services
 
|   |   posts.js
 
|   index.js
 
|   package.json
 
|   package-lock.json  
## Getting Started
Clone the repository
 
```bash
  git clone https://link-to-project
```
 
Go to the project directory
 
```bash
  cd my-project
```
 
Install required packages
 
```bash
  npm install
```
 
Run the server
 
```bash
  npm run start
```
## What Is Amazon DynamoDB?
Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling. DynamoDB also offers encryption at rest, which eliminates the operational burden and complexity involved in protecting sensitive data. For more information, see DynamoDB Encryption at Rest.
## Crud Operation
Install the AWS-SDK to be used to do things with DynamoDB.
```bash
  npm install aws-sdk
```
Database connection
```bash
const DynamoDB = new AWS.DynamoDB();
const AWS = require('aws-sdk')
const uuidv4 = require('uuid')
AWS.config.update({
    region: "us-east-1", 
    accessKeyId: "your access key",
    secretAccessKey: "your secret access key",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
```

## Sql vs NoSql
```bash
-SQL databases are relational, NoSQL databases are non-relational.
-SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
-SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
-SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
-SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        | Sql                                                 | NoSQL            
                        

|Data Storage Model     | Tables with fixed rows and columns                  | Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic 

|Examples               | Oracle, MySQL, Microsoft SQL Server, and PostgreSQL | MongoDB and CouchDB, Dynamodb                                                                                                   |
|Schemas                | Rigid                                               | Flexible                                                                                                                        |
|Scaling                |Vertical                                             | Horizontal                                                                                                                      |
|Data to Object Mapping | Requires ORM                                        | Many do not require ORMs                                                                                                        |

```
## Examples Sql vs Nosql
Find the cars made by Ford in 2019.
NoSQL (MongoDB):
We can pass multiple conditions separated by comma to indicate the “and” logic on the conditions.
> db.car.find( {make: "ford", year: "2019"} ).pretty()
{

 "_id" : ObjectId("600c63cf32e0e6419cee81af"),

 "year" : "2019",

 "make" : "ford",

 "color" : "white",

 "km" : 8000,

 "price" : 42000

}

SQL (MySQL):

It is similar to the previous example. We can combine multiple conditions in the where clause using the and operator.

mysql> select * from car
    
    -> where make = "ford" and year = "2019";


## Product Table
```bash
  productId:string,
  stock:number,
  productName:string,
  isDiscount:boolen,
  category:{
            categoryId:number,
            categoryName:string,
  }
```
## 

- [@fatmakin](https://www.github.com/fatmakin) 

  
