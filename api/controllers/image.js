"use strict";

const { text } = require("express");

module.exports = {
  listImages,
  createImage,
  readImage,
  updateImage,
  deleteImage,
};

var testData = {
  id: "0123456789abcd",
  title: "Testowy obrazek",
  description: "Opis do obrazka",
  date: "2017-11-09T10:20:00.214Z",
  path: "/library/images/",
  size: 1024,
};

function listImages(req, res, next) {
  res.json([testData]);
}

function createImage(req, res, next) {
  res.json(testData);
}

function readImage(req, res, next) {
  var id = req.swagger.params.id.value

  res.json(testData);
}

function updateImage(req, res, next) {
  var id = req.swagger.params.id.value
  var updated = testData

  if (req.body['title'] != null) 
    updated.title = req.body['title'];
  if (req.body['description'] != null)
    updated.description = req.body['description'];
  if (req.body['date'] != null) 
    updated.date = req.body['date'];

  res.json(updated);
}

function deleteImage(req, res, next) {
  var id = req.swagger.params.id.value
  var del = {
    id: "fs4322",
    status: "deleted",
  };

  res.json(del);
}
