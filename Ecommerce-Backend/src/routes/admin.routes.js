const express=require("express");
const router=express.Router();

const ordercontroller=require("../controller/adminOrder.controller.js");
const authenticate = require("../middleware/authenticate.js");


router.get("/",authenticate,ordercontroller.getAllOrders);
router.put('/:orderId/confirmed',authenticate,ordercontroller.confirmOrders);
router.put('/:orderId/ship',authenticate,ordercontroller.shipOrders);
router.put('/:orderId/deliver',authenticate,ordercontroller.deliverOrders);
router.put('/:orderId/cancel',authenticate,ordercontroller.cancelders);
router.delete('/:orderId/delete',authenticate,ordercontroller.deleteOrders);



module.exports=router;