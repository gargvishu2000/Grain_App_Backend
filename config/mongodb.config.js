import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://shubham_garg:Ipu@1754@grain-app.lgoljfk.mongodb.net/grain-app', {     
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;