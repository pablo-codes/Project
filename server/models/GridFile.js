
const mongoose = require('mongoose')
const schema = require('gridfile')

module.exports = mongoose.model('CustomGridFile', schema, "images.files")