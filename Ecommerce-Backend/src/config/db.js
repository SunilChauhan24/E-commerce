const  mongoose  = require("mongoose")

const mondbUrl="mongodb+srv://sc053038:hEatZg68LtNawGB5@cluster0.amavtuo.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}