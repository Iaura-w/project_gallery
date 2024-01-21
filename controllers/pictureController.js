var Picture = require('../models/picture');

// Zdefiniowanie pustych funkcji
exports.index = function(req, res) {
    console.log("wywołanie get index");
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.picture_list = function(req, res) {
    console.log("wywołanie get pictures");
    res.send('NOT IMPLEMENTED: Picture list');
};

console.log("kontroler gotowy");
