"use strict";

var $start = null;
var $save = null;
var $next = null;
var $chrono = null;
var $width = null;
var $height = null;
var $refresh = null;
var updateChartInterval = null;

function Rendering (id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');

    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight - $("#settings").height();
    console.log($(document.body).height(), $("#settings").height());
};

Rendering.prototype.event = function (event) {
    var interval;
    if(event == "RUN") {
        $chrono.text(this.motor.environment.chrono);
    } else if(event == "START") {
        var that = this;
        interval = setInterval(function () {
            that.displayStateCanvas();
        }, 250);
        $start.text('Pause');
    } else if(event == "PAUSE") {
        clearInterval(interval);
        $start.text('Resume');
    } else if(event == "END") {
        this.displayStateCanvas();
        clearInterval(interval);
        $start.text('Restart');
    }
};

Rendering.prototype.init = function () {
    this.motor.environment.settings.state.height = parseInt(this.canvas.height/(this.motor.environment.settings.state.blockHeight));
    this.motor.environment.settings.state.width = parseInt(this.canvas.width/(this.motor.environment.settings.state.blockWidth));
    this.create();
    this.motor.init();
    this.displayStateCanvas();
    $chrono.text(this.motor.environment.chrono);
};

/**
 * Save the settings
 * @return {[type]} [description]
 */
Rendering.prototype.loadSettings = function () {
    $start.text("Start");
    this.motor.environment.settings.state.width = parseInt($width.val());
    this.motor.environment.settings.state.height = parseInt($height.val());
    this.motor.environment.settings.state.refresh = parseInt($refresh.val());

    this.motor.stop();
    this.motor.environment.init();
    this.createChart();
    this.displayStateCanvas();
};

Rendering.prototype.createChart = function() {
    var that = this;

    clearInterval(updateChartInterval);
    updateChartInterval = setInterval(function () {
        that.updateChart();
    }, 550);
};
/**
 * create the table and the charts
 */
Rendering.prototype.create = function() {
    var that = this;

    $chrono = $("#chrono");
    $width = $("#width");
    $height = $("#height");
    $refresh = $("#refresh_ratio");

    $start = $("#start");
    $save = $("#save");
    $next = $("#next");


    $start.on('click', function (e) {
        e.preventDefault();
        if($start.text() == 'Restart') {
            that.loadSettings();
        }
        that.motor.start();
    });
    $save.on('click', function (e) {
        e.preventDefault();
        that.loadSettings();
    });
    $next.on('click', function (e) {
        e.preventDefault();
        that.motor.run();
    });

    $width.val(this.motor.environment.settings.state.width);
    $height.val(this.motor.environment.settings.state.height);
    $refresh.val(this.motor.environment.settings.state.refresh);
    this.createChart();
};

Rendering.prototype.updateChart = function() {
};

Rendering.prototype.displayStateCanvas = function (callback) {
    var boxWidth = this.canvas.width / this.motor.environment.settings.state.width;
    var boxHeight = this.canvas.height / this.motor.environment.settings.state.height;
    var previousColor = this.motor.environment.settings.state.background;
    this.context.fillStyle = this.motor.environment.settings.state.background;

    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (var j = this.motor.environment.currentState.length - 1; j >= 0; j--) {
        var x = j * boxWidth;
        var currentStateX = this.motor.environment.currentState[j];
        for (var i = currentStateX.length - 1; i >= 0; i--) {
            var agent = currentStateX[i];
            if(callback) {
                callback(agent, j, i);
            }
            if(!agent) {
                continue;
            }
            var color = agent.getColor();
            if(previousColor != color)
                this.context.fillStyle = color;
            this.context.fillRect(x, i * boxHeight, boxWidth, boxHeight);
            previousColor = color;
        }
    }
};