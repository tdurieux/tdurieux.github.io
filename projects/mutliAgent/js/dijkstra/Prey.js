"use strict";

function Prey (environment, type) {
    Prey.__super__.constructor.apply(this, arguments);
    this.randomDestination = null;
};__extends(Prey, Agent);

Prey.prototype.getColor = function () {
    return "#812418";
};

/**
 * the agent does something
 * @return {[type]} [description]
 */
Prey.prototype.doIt = function () {
    /*if(this.randomDestination == null || (this.randomDestination.x == this.x && this.randomDestination.y == this.y)) {
        this.randomDestination = this.environment.createRandomPosition(20);
    }*/

    var agents = this.neighbours();
    shuffle(agents.empty);
    var coord = this.environment.getNextPositionPrey(this);
    if(agents.empty.length > 0 ) {
        this.move(agents.empty[0].x, agents.empty[0].y);
    }
}