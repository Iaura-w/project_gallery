"use strict";

var SwaggerExpress = require("swagger-express-mw");
var app = require("express")();
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  app.get("/", (req, res) => {
    res.send("Witaj w galerii.");
  });

  app.get("/users", (req, res) => {
    res.send("użytkownicy");
  });

  app.get("/comments", (req, res) => {
    res.send("komentarze");
  });

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/hello"]) {
    console.log(
      "try this:\ncurl http://127.0.0.1:" + port + "/hello?name=Scott"
    );
  }
});
