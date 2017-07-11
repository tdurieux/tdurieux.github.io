"use strict";

var chart = null;;
var $density = null;
var $density_value = null;
var $follower_initial = null;
var $prey_initial = null;
var $distance = null;

var DijkstraRendering = function (id) {
    DijkstraRendering.__super__.constructor.apply(this, arguments);
    this.motor = new DijkstraMotor();
    this.motor.addListener(this);
};__extends(DijkstraRendering, Rendering);

DijkstraRendering.prototype.event = function (event) {
    DijkstraRendering.__super__.event.apply(this, arguments);
};

DijkstraRendering.prototype.init = function () {
    DijkstraRendering.__super__.init.apply(this, arguments);
};

/**
 * Save the settings
 * @return {[type]} [description]
 */
DijkstraRendering.prototype.loadSettings = function () {
    this.motor.environment.settings.wall.density = parseInt($density.val())/100;
    this.motor.environment.settings.follower.initial = parseInt($follower_initial.val());
    this.motor.environment.settings.prey.initial = parseInt($prey_initial.val());
    this.motor.environment.settings.state.displayDistance = $distance.is(':checked');

    DijkstraRendering.__super__.loadSettings.apply(this, arguments);
};

DijkstraRendering.prototype.createChart = function() {
    chart = new CanvasJS.Chart("chartContainer", {      
      title:{
        text: ""
      },
      axisY :{
        includeZero: false,
        minimum: 0,
        maximum: 1,
        stripLines:[]
      },
      data: []
    });

    chart.render();
    DijkstraRendering.__super__.createChart.apply(this, arguments);
};
/**
 * create the rendering
 */
DijkstraRendering.prototype.create = function() {
    DijkstraRendering.__super__.create.apply(this, arguments);
    var that = this;
    $density = $("#density");
    $density_value = $("#density_value");
    $follower_initial = $("#follower_initial");
    $prey_initial = $("#prey_initial");
    $distance = $("#distance");

    $density.val(this.motor.environment.settings.wall.density * 100);
    $density_value.val(this.motor.environment.settings.wall.density * 100);
    $follower_initial.val(this.motor.environment.settings.follower.initial);
    $prey_initial.val(this.motor.environment.settings.prey.initial);
};


DijkstraRendering.prototype.displayStateCanvas = function () {
    DijkstraRendering.__super__.displayStateCanvas.apply(this);
    if(!this.motor.environment.settings.state.displayDistance) {
        return;
    }
    var boxWidth = this.canvas.width / this.motor.environment.settings.state.width;
    var boxHeight = this.canvas.height / this.motor.environment.settings.state.height;
    this.context.font = boxHeight + "px Tahoma";
    var that = this;
    var first;
    var grid = this.motor.environment.dijkstraMap;
    if(!grid) return;
    for (var i = 0; i < grid.length; i++) {
        var level = grid[i];
        if(!level) continue;
        for (var j = 0; j < level.length; j++) {
            if(!level[j]) continue;
            this.context.fillText(level[j], i * boxWidth + boxWidth/4, j * boxHeight +boxHeight );
        }
    }
};

DijkstraRendering.prototype.updateChart = function() {
    chart.render();
};

$(document).ready(function () {    
    var rendering = new DijkstraRendering('current_state_canvas');
    rendering.init();
});