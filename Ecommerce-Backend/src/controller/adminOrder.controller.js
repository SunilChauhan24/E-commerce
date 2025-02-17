const orderService = require("../services/orderservice.js");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    return res.status(202).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const confirmOrders = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await orderService.confirmedOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  
};

const shipOrders = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await orderService.shipOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deliverOrders = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await orderService.deliverOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const cancelders = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await orderService.cancelOrder(orderId);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteOrders = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orders = await orderService.deleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllOrders,
  confirmOrders,
  shipOrders,
  deliverOrders,
  cancelders,
  deleteOrders,
};
