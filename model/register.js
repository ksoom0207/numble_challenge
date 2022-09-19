
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

module.exports = mongoose.model('register', new Schema({
    doctor_id: { type: String },
    address: { type: String },
    address_code: { type: String },
    store_address: { type: String },
},
    { timestamps: true },
    { versionKey: false }
))