"use strict";

var FishMotor = function() {
    FishMotor.__super__.constructor.apply(this, arguments);
    this.environment = new FishEnvironment();
};__extends(FishMotor, Motor);

FishMotor.prototype.isFinalState = function () {
    return this.environment.settings.shark.population == 0 || this.environment.settings.fish.population == 0;
};