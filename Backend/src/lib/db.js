import mongoose from "mongoose";

 export async function connectdb() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("Mongo URI is required");
        }

        const conn = await mongoose.connect(mongoUri);

        console.log("MongoDB connected:", conn.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectdb;
