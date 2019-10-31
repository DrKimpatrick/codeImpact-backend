import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_DATABASE } = process.env;

// default mongoDB connection string
const mongodbUrl = 'mongodb://localhost/banka1';

const atlas = "mongodb+srv://codeimpactug:Kp15712Kp@codeimpact-ar8ut.mongodb.net/test?retryWrites=true&w=majority"

export default { 
    MONGODB_DATABASE: MONGODB_DATABASE || mongodbUrl
 }