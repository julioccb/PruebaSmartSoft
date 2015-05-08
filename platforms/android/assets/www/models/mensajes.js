var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var mensajeSchema = new Schema({
  title:    { type: String },
  content:  { type: String }   
});

module.exports = mongoose.model('Mensaje', mensajeSchema);