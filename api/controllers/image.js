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
  res.json(testData);
}

function updateImage(req, res, next) {
  var updated = testData

  if(req.param('title') != null)
    updated.title = req.param('title')
  if(req.param('description') != null)
    updated.description = req.param('description')
  if(req.param('date') != null)
    updated.date = req.param('date')

  
  res.json(updated);
}

function deleteImage(req, res, next) {
  var del = {
    id: "fs4322",
    status: "deleted"
  }
  res.json(del);
}
