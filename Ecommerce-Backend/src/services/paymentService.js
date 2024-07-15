const razorpay = require("../config/razorpayclient");

const orderservice = require("../services/orderservice.js");

const createPaymentLink = async (orderId) => {
  try {
    const order = await orderservice.findOrderById(orderId);
    const paymentLinkRequest = {
      amount: order.totalPrice * 100,
      currency: "INR",
      customer: {
        name: order.user.firstname + " " + order.user.lastname,
        contact: order.user.mobile,
        email: order.user.email,
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      callback_url: `http://localhost:3000/payment/${orderId}`,
      callback_method: "get",
    };
    const paymentLink = await razorpay.razorpay.paymentLink.create(paymentLinkRequest);
    // razorpay.razorpay.paymentLink
    const paymentLinkId = paymentLink.id;
    const payment_Link_url = paymentLink.short_url;

    const resData = {
      paymentLinkId: paymentLinkId,
      payment_Link_url,
    };

    return resData;
  } catch (error) {
            console.error("Error creating payment link:", error);

    throw new Error(error.message);
  }
};

const updatePaymentInformation = async (reqData) => {
  const paymentId = reqData.payment_id;
  const orderId = reqData.order_id;

  try {
    const order = await orderservice.findOrderById(orderId);
    const payment = await razorpay.payments.fetch(paymentId);

    if (payment.status == "captured") {
      order.paymentDetails.paymenId = paymentId;
      order.paymentDetails.status = "COMPLETED";
      order.orderStatus = "PLACED";

      await order.save();
    }

    const resData = { message: "Your Order Is Placed", success: true };

    return resData;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createPaymentLink,
  updatePaymentInformation,
};
