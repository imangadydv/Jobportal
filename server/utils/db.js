import mongoose from "mongoose";

const connectDB = async () => {
    try {
       const con= await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully'+con.connection.host);
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;