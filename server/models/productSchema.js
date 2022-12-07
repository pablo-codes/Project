const mongoose = require('mongoose')

const product = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    features: String,
    gridfileid: Array,
    gridfilename: Array

}, { timestamps: true })

module.exports = new mongoose.model('products', product)