const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name: {
      requred: true,
      type: String,
      unique: 1,
      maxlength: 100
    }
});



const Brand = mongoose.model('Brand',brandSchema);

module.exports = { Brand }
