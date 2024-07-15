const Review = require("../models/review.js");
const productService = require("../services/product.service.js");

async function createReview(reqData, user) {
  const product = await productService.findProductById(reqData.productId);

  const reveiw = new Review({
    user: user._id,
    product: product._id,
    review: reqData.reveiw,
    createdAt: new Date(),
  });

  await product.save();
  return await reveiw.save();
}

async function getAllReview(productId) {
  const product = await productService.findProductById(productId);

  if (!product) {
    throw new Error("product not found with id ", productId);
  }

  const reviews = await Review.find({ product: productId }).populate("user");
  console.log("reviews ", reviews);
  return reviews;
}

module.exports = {
  createReview,
  getAllReview,
};
