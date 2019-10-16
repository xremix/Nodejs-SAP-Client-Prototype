const path = require('path');

exports.index = function(req, res) {
    res.sendFile(path.join(__dirname + '/../www/index.html'));
};

exports.up = function (req, res) {
  res.send('Service is up!');
};
