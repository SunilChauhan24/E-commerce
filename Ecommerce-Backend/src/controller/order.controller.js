const orderService = require("../services/orderservice.js");

const createOrderController = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await orderService.createOrder(user, req.body);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await orderService.findOrderById(req.params.id);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const OrderHistory = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await orderService.usersOrderHistory(req, user._id);
    res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createOrderController,
  findOrderById,
  OrderHistory,
};
