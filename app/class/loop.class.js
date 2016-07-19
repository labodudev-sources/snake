/*
Copyright (C) 2016  Jimmy Latour
http://labodudev.fr
*/

"use strict"

define(['./load-conf.class', './display.class'], function (conf, display) {
  function renderLoop(timestamp) {
    requestAnimationFrame(renderLoop);

    // La boucle principale
    display.clearContext();
  }

  requestAnimationFrame(renderLoop);
});
