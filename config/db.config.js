import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Successfully database connection');
    } catch (error) {
        console.error('Error during connect to DB', error);

    }
}

export default dbConnect;