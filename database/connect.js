const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/Pindie'; //строка подключения к базе данных

async function connectToDatabase() {
    try{
        await mongoose.connect(DB_URL); // подключение к базе данных
        console.log("Connected to database");
    }
    catch(error){
        console.log("Error connecting to database");//если подключение к базе данных не успешно
        console.log(error);
    };
};

module.exports = {
    connectToDatabase
};