"use strict";

function Environment () {
    this.chrono = 0;
};

/**
 * Init the environment 
 * @return {[type]} [description]
 */
Environment.prototype.init = function() {
    // init the current state
    this.currentState = new Array(this.settings.state.width);
    for (var i = 0; i < this.currentState.length; i++) {
        this.currentState[i] = new Array(this.settings.state.height);
    }
    // init the chrono
    this.chrono = 0;
};

Environment.prototype.currentState;

Environment.prototype.settings = {
    state: {
        height: 40,
        width: 40,
        refresh: 25,
        blockWidth: 10,
        blockHeight: 10
    }
};


Environment.prototype.neighbours = function (x, y, callback) {
    var width = this.settings.state.width;
    var height = this.settings.state.height;
    var start_i = (x - 1);
    if(start_i<0) {
        start_i = width + start_i;
    }
    var end_i = (x + 1);
    if(end_i >= width) {
        end_i = 0;
    }
    var start_j = (y - 1);
    if(start_j<0) {
        start_j = height + start_j;
    }
    var end_j = (y + 1);
    if(end_j >= height) {
        end_j = 0;
    }
    var agents = {
        'empty': []
    };
    // list fish and empty cases near the agent
    for (var i = start_i; i <= (end_i + 2 > i ? end_i: (width - 1)); i++) {
        for (var j = start_j; j <= (end_j + 2 > j ? end_j: (height - 1)); j++) {
            if(i == x && j == y) continue;
            var agent = this.currentState[i][j];
            if(!agent) {
                agents.empty.push({x: i, y: j});
            } else {
                if(!agents[agent.getName()]){
                    agents[agent.getName()] = [];
                }
                agents[agent.getName()].push(agent);
            }
            if(callback != null && isFunction(callback)) {
                callback(agent, i, j);
            }
            if(end_j < start_j && this.settings.state.height - 1 <= j)
                j = -1;
        }
        if(end_i < start_i && this.settings.state.width - 1 <= i)
            i = -1;
    }
    return agents;
};

Environment.prototype.createRandmonX = function () {
    return parseInt(Math.random()*this.settings.state.width);
};

Environment.prototype.createRandmonY = function () {
    return parseInt(Math.random()*this.settings.state.height);
};

Environment.prototype.createRandomPosition = function (maxStep) {
    if(!maxStep) {
        maxStep = 10;
    }
    var count = 0; 
    var x = this.createRandmonX();
    var y = this.createRandmonY();
    while(this.currentState[x][y]) {
        x = this.createRandmonX();
        y = this.createRandmonY();
        count ++;
        if(count >= maxStep) return null;
    }
    return {
        x: x, y: y
    }
};