const express=require("express");

const router=express.Router();

const userController=require('../controllers/user');

router.post('/postUser',userController.postUser);

router.get('/GetAllUser',userController.GetAllUser);

router.post('/postRevenue',userController.postRevenue);

router.post('/pastRevenueRecievedByMonth',userController.pastRevenueRecievedByMonth);

module.exports=router;