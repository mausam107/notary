const express=require("express");

const router=express.Router();

const userController=require('../controllers/user');

router.post('/postUser',userController.postUser);

router.post('/postRevenue',userController.postRevenue);

router.get('/pastRevenueRecievedByMonth',userController.pastRevenueRecievedByMonth);

module.exports=router;