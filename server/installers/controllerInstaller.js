var fs = require('fs');

var controller = function(container, app) {
  fs.readdirSync('./controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        container.register(file, require('../controllers/' + file));
        container.get(file, app);
    }
  });
}

module.exports = controller;
