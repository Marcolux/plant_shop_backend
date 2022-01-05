const express = require('express');
const orderRoutes = express.Router();
const orderController = require('../controllers/orderController');

orderRoutes.post('/:id', orderController.createOrder)
// orderRoutes.post('/:id', orderController.createOrder)


//gets all the orders of a user 
orderRoutes.get('/:userId', orderController.getOrders)

//gets an indivudal order by its id
orderRoutes.get('/orderinfo/:orderId', orderController.getOrderInfo)




module.exports = orderRoutes