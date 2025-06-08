const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.fjyggwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database:', error);
    }
}

module.exports = connectToDatabase;
