"use strict";

function Agent (environment) {
    this.environment = environment;
    this.x = -1;
    this.y = -1;
    this.lastMove;
};

/**
 * Move the agent to the coordinate (x,y)
 * @param  {int} x 
 * @param  {int} y
 */
Agent.prototype.move = function (x, y) {
    if(x == -1 || y == -1) return;
    this.environment.currentState[x][y] = this;
    if(this.x != -1 && this.y != -1)
        this.environment.currentState[this.x][this.y] = null;
    this.lastMove = {
        x: this.x,
        y: this.y
    };
    this.x = x;
    this.y = y;
};

Agent.prototype.getColor = function () {
    return "blue";
};

/**
 * the agent does something
 * @return {[type]} [description]
 */
Agent.prototype.doIt = function () {
};

Agent.prototype.neighbours = function (callback) {
    return this.environment.neighbours(this.x, this.y, callback);
};