"use strict";

var FishEnvironment = function() {
    FishEnvironment.__super__.constructor.apply(this, arguments);
};__extends(FishEnvironment, Environment);

FishEnvironment.prototype.init = function() {
    FishEnvironment.__super__.init.apply(this, arguments);

    // init the populations
    this.settings.fish.population = 0;
    this.settings.shark.population = 0;

    // create fishes
    for (var i = 0; i < this.settings.fish.initial; i++) {
        var fish =  new Fish(this);
        fish.lastBreeding = parseInt(Math.random()*this.settings.fish.breeding_age);
        fish.age = fish.lastBreeding;
        var coor = this.createRandomPosition();
        if(coor == null) continue;
        fish.move(coor.x, coor.y);
        this.settings.fish.population ++;
    }
    // create sharps
    for (var i = 0; i < this.settings.shark.initial; i++) {
        var fish = new Shark(this);
        fish.lastBreeding = parseInt(Math.random()* this.settings.shark.breeding_age);
        fish.age = fish.lastBreeding;
        fish.lastEat = parseInt(Math.random()*this.settings.shark.starving_time);
        var coor = this.createRandomPosition();
        if(coor == null) continue;
        fish.move(coor.x, coor.y);
        this.settings.shark.population ++;
    }
};

FishEnvironment.prototype.settings.fish = {
    population: 0,
    initial: 200,
    breeding_age: 3
};
FishEnvironment.prototype.settings.shark = {
    population: 0,
    initial: 5,
    breeding_age: 10,
    starving_time: 3
};