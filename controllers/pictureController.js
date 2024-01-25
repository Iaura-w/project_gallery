var Picture = require('../models/picture');

exports.index = function(req, res) {
    console.log("wywołanie get index");
    Picture.find().then(function(pictures){
        res.render('index', {title: 'Galeria', items: pictures});
    });
};

exports.picture_list = function(req, res) {
    console.log("wywołanie get pictures");
    let pictureList
    const getPictures = async () => {
        try{
            pictureList = await Picture.find()
            console.log(pictureList)
            res.send(pictureList)
        }catch(err){
            console.log(err)
        }
    }

    getPictures()
};

exports.picture_create_get = function(req, res) {
    res.render('create');
}

exports.picture_create_post = function(req, res) {
    const picture = new Picture(
        {
            nazwa: req.body.nazwa, 
            rozmiar: req.body.rozmiar
        });

    picture.save().then(() => {
        console.log(picture)
        res.render('show', {item: req.body})
    }).catch(err => {
        console.log(err)
    })
};

exports.picture_info = function(req, res) {
    const id = req.params.id;
    Picture.findById(id).then(picture => {
        res.render('show', { title: 'Szczegóły obrazu', item: picture });
        console.log(picture)
    }).catch(err => {
        console.log(err);
        res.status(404).send('Nie znaleziono obrazu.');
    });
};

exports.picture_update_post = async function (req, res) {
    let picture = {
      nazwa: req.body.nazwa,
      rozmiar: req.body.rozmiar
    };
  
    const id = req.params.id;
  
    try {
      await Picture.findByIdAndUpdate(id, picture);
      res.redirect('/pictures');
    } catch (err) {
      console.log(err);
      res.status(500).send("Wystąpił błąd serwera.");
    }
};
  
exports.picture_update_get = function (req, res) {
const id = req.params.id;
let data;

Picture.findById(id).then(function (picture) {
    res.render('edit', { item: picture, id: id });
});
};
  
exports.picture_delete_post = function(req, res) {
    const id = req.body.id;
    Picture.findByIdAndDelete(id)
        .then(() => { res.json({success: true}); })
        .catch(err => { res.status(500).json({success: false}); });
};

console.log("kontroler gotowy");
