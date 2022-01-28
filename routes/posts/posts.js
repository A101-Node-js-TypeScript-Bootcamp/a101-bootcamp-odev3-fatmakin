const aws = require('aws-sdk');
const express = require('express')
let router = express.Router();

let postsController = require('../../controllers/Posts')

router.post('/',postsController.add);// insert data
router.get('/',postsController.fetchAll);// all data list
router.get('/:productId',postsController.fetchSingle);// data list by productid
router.get('/:productId',postsController.fetchisDiscount);//  data list by isdiscount
router.put('/:productId',postsController.update);// update data by productid
router.delete('/:productId',postsController.delete);// delete data by productid

module.exports = router; //  The module requires Express and then uses it to create a Router object.
