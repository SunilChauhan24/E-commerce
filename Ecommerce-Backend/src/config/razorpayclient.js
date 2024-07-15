const Razorpay = require('razorpay');

apikey = "rzp_test_zZ7K3ZehoBDcHh";
apiSecret = "q25y1tA1ozNOfggkIQuVDJbJ";

const razorpay = new Razorpay({
  key_id: apikey,
  key_secret: apiSecret,
});

module.exports = { razorpay };
