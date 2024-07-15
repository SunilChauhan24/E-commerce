const app = require(".");
const { connectDb } = require("./config/db");

const PORT=6464;
app.listen(PORT, async()=>{
    await connectDb();
    console.log("Ecommerece Api Listing on PORT : ",PORT);
})