import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_DATABASE } = process.env;

// default mongoDB connection string
const mongodbUrl = 'mongodb://localhost/banka1';

export default { 
    MONGODB_DATABASE: MONGODB_DATABASE || mongodbUrl
 }