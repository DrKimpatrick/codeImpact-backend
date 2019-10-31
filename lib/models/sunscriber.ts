import * as mongoose from 'mongoose';
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

const Subscriber = new Schema(
    {
        email: {
            type: String,
            required: 'Email is required',
            unique: true,
            trim: true,
            lowercase: true,
            validate: (value: string) => {
                return validator.isEmail(value);
            },
            index: true,
        },
    },
    { timestamps: true },
);


// Plugin for Mongoose that turns duplicate errors into regular Mongoose validation errors.
Subscriber.plugin(uniqueValidator, { message: '{PATH} of value {VALUE} is already taken, try another' });
Subscriber.plugin(mongoosePaginate);

export default mongoose.model('Subscribers', Subscriber);