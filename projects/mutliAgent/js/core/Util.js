"use strict";

// Function that does subclassing
var __extends = function(child, parent) {
  for (var key in parent) {
    if (Object.prototype.hasOwnProperty.call(parent, key)) {
      child[key] = parent[key];
    }
  }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};

Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};

var isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

var closeTo = function (x1,y1, x2,y2) {
    return x1 >= x2 - 1 && x1 <= x2 + 1 && y1 >= y2 - 1 && y1 <= y2 + 1;
};

function shuffle2(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function asmModule(globals, env, heap) {
    "use asm";

    function shuffle(o){ //v1.0
      var j = 0, x= 0, i = 0;

      for(var j, x, i = o.length | 0; i; j = globals.Math.floor(globals.Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };

    return { shuffle: shuffle };
}
var asmInstance = asmModule(window, {}, new Array(0));
var shuffle = asmInstance.shuffle;
/**
 * shuffle the array
 * @param  {[type]} array 
 * @return {Array}       the array
 */
function shuffle1(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}