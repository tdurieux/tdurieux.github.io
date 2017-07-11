"use strict";

var Shark = function () {
    Shark.__super__.constructor.apply(this, arguments);
    this.age = 0;
    this.lastBreeding = 0;
    this.lastEat = 0;
};__extends(Shark, Agent);

/**
 * The agent give birth at the coordinate (x,y)
 * @param  {int} x 
 * @param  {int} y
 */
Shark.prototype.born = function (x, y) {
    this.lastBreeding = 0;
    var fish = new Shark(this.environment);
    fish.move(x, y);
    this.environment.settings.shark.population ++;
};

Shark.prototype.getColor = function () {
    return "#ff2620";
};

/**
 * the agent does something
 * @return {[type]} [description]
 */
Shark.prototype.doIt = function () {
    this.age++;
    this.lastBreeding++;
    this.lastEat++;
    var free = [];
    var fish = [];

    this.neighbours(function (agent, x, y) {
        if(!agent) {
            free.push({
                x: x,
                y: y
            });
        } else if(agent instanceof Fish) {
            fish.push(agent);
        } 
    });

    // shuffle 
    shuffle(free);
    shuffle(fish);
    
    if(fish.length > 0 ) {
        this.lastEat = 0;
        this.environment.settings.fish.population--;
        var elem = fish[0];
        fish.splice(0, 1);
        free.push({
            x: this.x,
            y: this.y
        });
        var index = list.indexOf(elem);
        if(index > -1)
            list.splice(index, 1);
        this.move(elem.x, elem.y);
        elem.x = -1;
        elem.y = -1;
    // the agent moves
    } else if(free.length > 0 ) {
        var elem = free[0];
        free.splice(0, 1);
        //console.log("move from (" + this.x + ", " +  this.y + ") to (" + elem.x + ", "  + elem.y + ")");
        free.push({
            x: this.x,
            y: this.y
        });
        this.move(elem.x, elem.y);
    }

    // the agent give born
    if(this.lastBreeding >= this.environment.settings.shark.breeding_age + 1) {
        this.lastBreeding = 0;
        if(free.length > 0 ) {
            this.born(free[0].x, free[0].y);
        } else {
            var coor = null ;//createRandomPosition();
            if(coor != null) {
                this.born(coor.x, coor.y);
            }
        }
    }

    // the shark dies
    if(this.lastEat >= this.environment.settings.shark.starving_time) {
        this.environment.settings.shark.population --;
        this.environment.currentState[this.x][this.y] = null;
    }
}