/*
Copyright (C) 2016  Jimmy Latour
http://labodudev.fr
*/

"use strict"

define([], function () {
  var req = new XMLHttpRequest();
  req.open('GET', '../conf/game.conf.json', false);
  req.send(null);

  if(req.status == 200) {
    return JSON.parse(req.responseText);
  }
});
