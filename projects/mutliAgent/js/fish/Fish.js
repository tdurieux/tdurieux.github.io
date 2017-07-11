"use strict";

var Fish = function () {
    Fish.__super__.constructor.apply(this, arguments);
    this.age = 0;
    this.lastBreeding = 0;
};__extends(Fish, Agent);

/**
 * The agent give birth at the coordinate (x,y)
 * @param  {int} x 
 * @param  {int} y
 */
Fish.prototype.born = function (x, y) {
    this.lastBreeding = 0;
    var fish = new Fish(this.environment);
    fish.move(x, y);
    this.environment.settings.fish.population++;
};

Fish.prototype.getColor = function () {
    return "#203ca0";
};

/**
 * the agent does something
 * @return {[type]} [description]
 */
Fish.prototype.doIt = function () {
    this.age++;
    this.lastBreeding ++;
    var free = [];

    this.neighbours(function (agent, x, y) {
        if(!agent) {
            free.push({
                x: x,
                y: y
            });
        }
    });

    // shuffle 
    shuffle(free);
    
    if(free.length > 0 ) {
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
    if(this.lastBreeding >= this.environment.settings.fish.breeding_age + 1) {
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
}