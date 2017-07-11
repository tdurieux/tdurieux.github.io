"use strict";

var SatisfactionMotor = function() {
    SatisfactionMotor.__super__.constructor.apply(this, arguments);
    this.environment = new SatisfactionEnvironment();
};__extends(SatisfactionMotor, Motor);

SatisfactionMotor.prototype.isFinalState = function () {
    if(this.environment.chrono == 0) {
        return false;
    }
    var move = this.environment.move;
    this.environment.move = 0;
    return move == 0;
};