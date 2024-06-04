import mongoose, { ConnectOptions } from "mongoose";

export const connect = async () => {
    // const {MONGODB_URI} = process.env;
    const MONGODB_URI="mongodb+srv://pabloolariaga27:45387987ola@cluster0.g9j8hym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    if (!MONGODB_URI) {
        throw new Error("MongoDB URI is missing");
    }
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions); // Add 'as ConnectOptions' to fix the error
};