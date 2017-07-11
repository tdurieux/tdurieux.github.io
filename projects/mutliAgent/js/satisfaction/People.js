"use strict";

var People = function (environment, type) {
    People.__super__.constructor.apply(this, arguments);
    this.type = type;
    this.satisfaction = 0;
    this.color = type;
    if(type == 'red') {
        this.color = '#801e1c';
    } else if(type == 'blue') {
        this.color = '#183698';
    }
};__extends(People, Agent);

People.prototype.getColor = function () {
    return this.color;
};

/**
 * the agent does something
 * @return {[type]} [description]
 */
People.prototype.doIt = function () {
    var free = [];
    
    var peopleSameAsMe = 0;

    var meType = this.type;
    this.neighbours(function (agent, x, y) {
        if(!agent) {
            free.push({
                x: x,
                y: y
            });
        } else {
            if(agent.type == meType) {
                peopleSameAsMe++;
            }
        }
    });

    // shuffle 
    shuffle(free);

    if(free.length == 8) {
        this.satisfaction = 1;
    } else {
        this.satisfaction = peopleSameAsMe/(8 - free.length);
    }
    this.environment[this.type].average += this.satisfaction;
    if(this.satisfaction < this.environment[this.type].satisfaction) {
        this.environment.move ++;
        var elem = this.environment.createRandomPosition();
        if(elem != null) {
            this.move(elem.x, elem.y);
        }
    }
}