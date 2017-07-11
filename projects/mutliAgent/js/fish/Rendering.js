"use strict";

var chart = null;
var chart2 = null;
var ratioFishShark = null;
var populationFish = null;
var populationShark = null;
var $fish_population = null;
var $sharks_population = null;
var $age = null;
var $fish_initial = null;
var $fish_breeding = null;
var $shark_initial = null;
var $shark_breeding = null;
var $shark_starvation = null;

var FishRendering = function () {
    FishRendering.__super__.constructor.apply(this, arguments);
    this.motor = new FishMotor();
    this.motor.addListener(this);

    this.ages = {
        'fish': [],
        'shark': []
    };
};__extends(FishRendering, Rendering);

FishRendering.prototype.event = function (event) {
    FishRendering.__super__.event.apply(this, arguments);
    if(event == "RUN") {
        $fish_population.text(this.motor.environment.settings.fish.population);
        $sharks_population.text(this.motor.environment.settings.shark.population);
    }
};

FishRendering.prototype.init = function () {
    this.motor.environment.settings.fish.initial = parseInt(this.motor.environment.settings.state.height * this.motor.environment.settings.state.width * 0.3);
    this.motor.environment.settings.shark.initial = parseInt(this.motor.environment.settings.fish.initial/8);


    this.motor.environment.settings.state.background = "#070f29";
    this.motor.environment.settings.fish.initial = 1500;
    this.motor.environment.settings.shark.initial = 12;

    FishRendering.__super__.init.apply(this, arguments);
};

/**
 * Save the settings
 * @return {[type]} [description]
 */
FishRendering.prototype.loadSettings = function () {
    this.motor.environment.settings.fish.initial = parseInt($fish_initial.val());
    this.motor.environment.settings.fish.breeding_age = parseInt($fish_breeding.val());
    this.motor.environment.settings.shark.initial = parseInt($shark_initial.val());
    this.motor.environment.settings.shark.breeding_age = parseInt($shark_breeding.val());
    this.motor.environment.settings.shark.starving_time = parseInt($shark_starvation.val());

    FishRendering.__super__.loadSettings.apply(this, arguments);
};

FishRendering.prototype.createChart = function() {
    chart = new CanvasJS.Chart("chartContainer", {      
      title:{
        text: "Populations"
      },
      axisY :{
        includeZero: false,
        minimum: 0,
        maximum: this.motor.environment.settings.state.width * this.motor.environment.settings.state.height
      },
      data: [{        
        type: "spline", 
        showInLegend: true,
        name: "Fish",
        markerSize: 0,        
        dataPoints: [   
        ]
      },
      {        
        type: "spline", 
        showInLegend: true,
        name: "Shark",
        markerSize: 0,        
        dataPoints: [  ]
      }]
    });
    populationFish = chart.options.data[0];
    populationShark = chart.options.data[1];

    chart2 = new CanvasJS.Chart("chartContainer2",{      
      title:{
        text: "Ratio fish/shark"
      },
      axisY :{
        title: 'shark',
        includeZero: false,
        minimum: 0,
        //maximum: settings.state.width*settings.state.height
      },
      axisX :{
        title: 'fish',
        includeZero: false,
        minimum: 0,
        maximum: this.motor.environment.settings.state.width * this.motor.environment.settings.state.height
      },
      data: [{        
        type: "spline", 
        showInLegend: false,
        name: "ratio",
        markerSize: 0,        
        dataPoints: []
      }]
    });

    ratioFishShark = chart2.options.data[0];

    chart.options.data[0].dataPoints = [];
    chart.options.data[1].dataPoints = [];
    chart2.options.data[0].dataPoints = [];
    chart.render();
    chart2.render();

    FishRendering.__super__.createChart.apply(this, arguments);
};
/**
 * create the table and the charts
 */
FishRendering.prototype.create = function() {
    FishRendering.__super__.create.apply(this, arguments);

    var that = this;
    $fish_population = $("#fish_population");
    $sharks_population = $("#sharks_population");
    $age = $("#age");
    $fish_initial = $("#fish_initial");
    $fish_breeding = $("#fish_breeding");
    $shark_initial = $("#shark_initial");
    $shark_breeding = $("#shark_breeding");
    $shark_starvation = $("#shark_starvation");


    $fish_initial.val(this.motor.environment.settings.fish.initial);
    $fish_breeding.val(this.motor.environment.settings.fish.breeding_age);
    $shark_initial.val(this.motor.environment.settings.shark.initial);
    $shark_breeding.val(this.motor.environment.settings.shark.breeding_age);
    $shark_starvation.val(this.motor.environment.settings.shark.starving_time);

    this.createChart();
};

FishRendering.prototype.updateChart = function() {
    var content = '';
    var total = this.motor.environment.settings.fish.population + this.motor.environment.settings.shark.population;
    var max = Math.max(this.ages.fish.length, this.ages.shark.length);
    for (var i = 0; i < max; i++) {
        content += "<div class='ageFish'>";
        var fish = this.ages.fish[i];
        var shark = this.ages.shark[i];
        if(fish)
            content += "<span style='width: "+ (fish / this.motor.environment.settings.fish.population)*100+ "%;'>" + fish + "</span>";

        content += "</div><div class='age'>"+i+"</div><div class='ageShark'>";

        if(shark)
            content += "<span style='width: "+ (shark / this.motor.environment.settings.shark.population)*100+ "%;'>" + shark + "</span>";
        content +="</div><br>";
    }
    $age[0].innerHTML = content;
    chart.render();
    chart2.render();
};

FishRendering.prototype.displayStateCanvas = function () {
    var that = this;
    this.ages = {
        'fish': [],
        'shark': []
    };
    FishRendering.__super__.displayStateCanvas.apply(this, [function(agent, x, y) {
        if(agent) {
            var type = 'fish';
            if(agent instanceof Shark) {
                var type = 'shark';
            }
            if(that.ages[type][agent.age] == null){
                that.ages[type][agent.age] = 0;
            }
            that.ages[type][agent.age] ++;
        }
    }]);

    populationFish.dataPoints.push({x:this.motor.environment.chrono, y:this.motor.environment.settings.fish.population});
    if(populationFish.dataPoints.length > 350) {
        populationFish.dataPoints.splice(0, populationFish.dataPoints.length - 350);
    }
    populationShark.dataPoints.push({x:this.motor.environment.chrono, y:this.motor.environment.settings.shark.population});
    if(populationShark.dataPoints.length > 350) {
        populationShark.dataPoints.splice(0, populationShark.dataPoints.length - 350);
    }
    ratioFishShark.dataPoints.push({x:this.motor.environment.settings.fish.population, y:this.motor.environment.settings.shark.population});
    if(ratioFishShark.dataPoints.length > 350) {
        ratioFishShark.dataPoints.splice(0, ratioFishShark.dataPoints.length - 350);
    }
    //updateChart();
};

$(document).ready(function () {    
    var rendering = new FishRendering('current_state_canvas');
    rendering.init();
});