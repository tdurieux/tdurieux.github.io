"use strict";

var Follower = function (environment, type) {
    Follower.__super__.constructor.apply(this, arguments);

};__extends(Follower, Agent);

Follower.prototype.getColor = function () {
    return "#7d8110";
};

/**
 * the agent does something
 * @return {[type]} [description]
 */
Follower.prototype.doIt = function () {
    var coord = this.environment.getNextPosition(this);
    if(coord != null) {
        this.environment.eatPrey(coord);
        this.move(coord.x, coord.y);
    }
}