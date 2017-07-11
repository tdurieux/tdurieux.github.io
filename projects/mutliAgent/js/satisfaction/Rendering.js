"use strict";

var chart = null;
var satisfactionChart1 = null;
var satisfactionChart2 = null;
var $average1 = null;
var $average2 = null;
var $population1 = null;
var $population1_value = null;
var $population2 = null;
var $population2_value = null;
var $satisfaction1_min = null;
var $satisfaction1_min_value = null;
var $satisfaction2_min = null;
var $satisfaction2_min_value = null;
var $density = null;
var $density_value = null;


var SatisfactionRendering = function () {
    SatisfactionRendering.__super__.constructor.apply(this, arguments);
    this.motor = new SatisfactionMotor();
    this.motor.addListener(this);
};__extends(SatisfactionRendering, Rendering);

SatisfactionRendering.prototype.event = function (event) {
    SatisfactionRendering.__super__.event.apply(this, arguments);
    if(event == "RUN") {        
        var populationTotal = parseInt(this.motor.environment.settings.state.width * this.motor.environment.settings.state.height * this.motor.environment.settings.satisfaction.density);
        var average1 = this.motor.environment.red.average  / (populationTotal * this.motor.environment.red.population);
        var average2 = this.motor.environment.blue.average / (populationTotal * this.motor.environment.blue.population);
        this.motor.environment.red.average = 0;
        this.motor.environment.blue.average = 0;

        $average1.text(parseInt(average1*100) + "%");
        $average2.text(parseInt(average2*100) + "%");
        satisfactionChart1.dataPoints.push({x:this.motor.environment.chrono, y:average1*100});
        satisfactionChart2.dataPoints.push({x:this.motor.environment.chrono, y:average2*100});
    }
};

SatisfactionRendering.prototype.init = function () {
    SatisfactionRendering.__super__.init.apply(this, arguments);
    $chrono.text(this.motor.environment.chrono);
};

/**
 * Save the settings
 * @return {[type]} [description]
 */
SatisfactionRendering.prototype.loadSettings = function () {
    this.motor.environment.settings.satisfaction.density = parseInt($density.val())/100;

    this.motor.environment.red.population = parseInt($population1.val())/100;
    this.motor.environment.red.satisfaction = parseInt($satisfaction1_min.val())/100;
    this.motor.environment.blue.population = parseInt($population2.val())/100;
    this.motor.environment.blue.satisfaction = parseInt($satisfaction2_min.val())/100;
    
    SatisfactionRendering.__super__.loadSettings.apply(this, arguments);
};

SatisfactionRendering.prototype.createChart = function() {
    chart = new CanvasJS.Chart("chartContainer", {      
      title:{
        text: "Satisfaction"
      },
      axisY :{
        includeZero: false,
        minimum: 0,
        maximum: 100,
        stripLines:[{
            startValue:this.motor.environment.red.satisfaction*100 - 1,
            endValue: this.motor.environment.red.satisfaction*100,                
            color:"#FF2A37",
            label : "Min satisfaction rouge",
            labelFontColor: "#a8a8a8",
        },
        {
            startValue: this.motor.environment.blue.satisfaction*100,
            endValue: this.motor.environment.blue.satisfaction*100 + 1,                
            color:"#183698",
            label : "Min satisfaction bleu",
            labelFontColor: "#a8a8a8",
        }]
      },
      data: [
      {        
        type: "spline", 
        showInLegend: true,
        name: "Satisfaction moyenne rouge",
        markerSize: 0,        
        dataPoints: [  ],
        color: "#FF2A37",
      },
      {        
        type: "spline", 
        showInLegend: true,
        name: "Satisfaction moyenne bleu",
        markerSize: 0,        
        dataPoints: [  ],
        color: "#183698",
      }]
    });
    satisfactionChart1 = chart.options.data[0];
    satisfactionChart2 = chart.options.data[1];

    satisfactionChart1.dataPoints = [];
    satisfactionChart2.dataPoints = [];
    chart.render();

    SatisfactionRendering.__super__.createChart.apply(this, arguments);
};
/**
 * create the table and the charts
 */
SatisfactionRendering.prototype.create = function() {
    SatisfactionRendering.__super__.create.apply(this, arguments);

    var that = this;
    $population1 = $("#population1");
    $population1_value = $("#population1_value");
    $population2 = $("#population2");
    $population2_value = $("#population2_value");
    $satisfaction1_min = $("#satisfaction1_min");
    $satisfaction1_min_value = $("#satisfaction1_min_value");
    $satisfaction2_min = $("#satisfaction2_min");
    $satisfaction2_min_value = $("#satisfaction2_min_value");
    $density = $("#density");
    $density_value = $("#density_value");
    $average1 = $("#average1");
    $average2 = $("#average2");

    $population1.val(this.motor.environment.red.population * 100);
    $population1_value.val(this.motor.environment.red.population * 100);
    $satisfaction1_min.val(this.motor.environment.red.satisfaction * 100);
    $satisfaction1_min_value.val(this.motor.environment.red.satisfaction * 100);
    $population2.val(this.motor.environment.blue.population * 100);
    $population2_value.val(this.motor.environment.blue.population * 100);
    $satisfaction2_min.val(this.motor.environment.blue.satisfaction * 100);
    $satisfaction2_min_value.val(this.motor.environment.blue.satisfaction * 100);
    $density.val(this.motor.environment.settings.satisfaction.density * 100);
    $density_value.val(this.motor.environment.settings.satisfaction.density * 100);

    this.createChart();
};

SatisfactionRendering.prototype.updateChart = function() {
    chart.render();
};

$(document).ready(function () {    
    var rendering = new SatisfactionRendering('current_state_canvas');
    rendering.init();
});