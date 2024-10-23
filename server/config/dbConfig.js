import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb Connected Successfully")
    } catch (error) {
        console.log(`Error: ${error.messgge}`);
        process.exit(1)
    }
}