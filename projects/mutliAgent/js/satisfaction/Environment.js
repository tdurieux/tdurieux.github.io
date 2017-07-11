
"use strict";

var SatisfactionEnvironment = function() {
    SatisfactionEnvironment.__super__.constructor.apply(this, arguments);
    this.red = {
        average: 0,
        population: 0.5,
        satisfaction: 0.75
    };
    this.blue = {
        average: 0,
        population: 0.5,
        satisfaction: 0.75
    };
    this.move = 0;
};__extends(SatisfactionEnvironment, Environment);

SatisfactionEnvironment.prototype.init = function() {
    SatisfactionEnvironment.__super__.init.apply(this, arguments);

    this.settings.state.background = '#F1F1F1';
    // init the populations
    var populationTotal = parseInt(this.settings.state.width * this.settings.state.height * this.settings.satisfaction.density);

    for (var i = 0; i < populationTotal*this.red.population; i++) {
        var people =  new People(this, 'red');
        var coor = this.createRandomPosition();
        if(coor == null) continue;
        people.move(coor.x, coor.y);
    }

    for (var i = 0; i < populationTotal*this.blue.population; i++) {
        var people =  new People(this, 'blue');
        var coor = this.createRandomPosition();
        if(coor == null) continue;
        people.move(coor.x, coor.y);
    }
};

SatisfactionEnvironment.prototype.settings.satisfaction = {
    density: 0.6
};