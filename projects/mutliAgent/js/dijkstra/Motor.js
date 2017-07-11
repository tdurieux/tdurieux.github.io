"use strict";

var DijkstraMotor = function() {
    DijkstraMotor.__super__.constructor.apply(this, arguments);
    this.environment = new DijkstraEnvironment();
};__extends(DijkstraMotor, Motor);

DijkstraMotor.prototype.isFinalState = function () {
    if(this.environment.chrono == 0) {
        return false;
    }
    return this.environment.preys.length == 0;
};
DijkstraMotor.prototype.run = function () {
    this.environment.dijkstraMap = [];
    this.environment.performGridPosition();
    DijkstraMotor.__super__.run.apply(this, arguments);
};