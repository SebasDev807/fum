import { Schema, model } from "mongoose";

const UserSchema = Schema({

    username: {
        type: String,
        required: true,
        minlengh: 5
    },
    email: {
        type: String,
        required: true,
        match: /^[\w-\.]+@unimayor\.edu\.co$/
    },
    password: {
        type: String,
        required: true
    },

    token: {
        type: String,
        default: null
    },

    confirmed: {
        type: Boolean,
        default: false
    },

    status: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
},
    { timestamps: true }

);

UserSchema.methods.toJSON = function () {
    const { _id, __v, password, ...rest } = this.toObject();

    return rest;
}


export default model('Users', UserSchema);