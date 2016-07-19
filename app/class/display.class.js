/*
Copyright (C) 2016  Jimmy Latour
http://labodudev.fr
*/

"use strict"

define(['./load-conf.class'], function (conf) {

  /**
  * Initialise l'élement HTMLCanvasElement
  * Lui défini sa largeur et hauteur grâce aux données
  * du fichier /snake/app/conf/game.conf.json
  *
  * Défini également le context du Canvas en 2d
  */
  function display() {
    this.canvas = document.getElementById('csv');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext('2d');
  }

  display.prototype = {
    clearContext: function() {
      this.context.fillStyle = conf.game.backgroundColor;
      this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
  };

  return new display();
});
