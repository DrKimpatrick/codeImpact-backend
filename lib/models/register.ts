/* eslint-disable @typescript-eslint/no-var-requires */
import * as mongoose from 'mongoose';
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate');
const { Schema } = mongoose;

const CodingClasses = new Schema(
    {
        // primary information
        firstName: { type: String, trim: true, required: 'First name required', lowercase: true },

        lastName: { type: String, trim: true, required: 'Last name is required', lowercase: true },

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
        phoneNumber: {
            type: String,
            unique: true,
            index: true,
            trim: true,
            required: 'Phone number is required',
        },
        age: { type: String },
        gender: { type: String, enum: ['Male', 'Female'] },
        comment: { type: String },
        /* Location in words --> Location from the google map */
        location: { type: String, trim: true },
    },
    { timestamps: true, toObject: { getters: true }, toJSON: { getters: true } },
);

// Plugin for Mongoose that turns duplicate errors into regular Mongoose validation errors.
CodingClasses.plugin(uniqueValidator, { message: '{PATH} of value {VALUE} is already taken, try another' });
CodingClasses.plugin(mongoosePaginate);

export default mongoose.model('CodingClasses', CodingClasses);