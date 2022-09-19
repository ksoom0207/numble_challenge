
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

module.exports = mongoose.model('doctor', new Schema({
    id: { type: String },
    doctor_display_name: { type: String },
    doctor_image_url: { type: String },

    hospital_name: { type: String },
    hospital_address: { type: String },
    description: { type: String },
    hospital_img: [{ type: String }],

},
    { versionKey: false },
    { timestamps: true }
))

