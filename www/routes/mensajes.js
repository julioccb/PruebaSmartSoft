module.exports = function(app) {

  var Mensaje = require('../models/mensajes.js');

  
  findAllmensajes = function(req, res) {
    Mensaje.find(function(err, mensajes) {
      if(!err) {
        console.log('GET /mensajes')
        res.send(mensajes);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - Return a TVShow with specified ID
  
  //Link routes and functions
  app.get('/mensajes', findAllmensajes);
}