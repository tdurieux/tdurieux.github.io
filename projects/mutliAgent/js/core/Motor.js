"use strict";

var interval = null;

var Motor = function () {
    this.environment = new Environment();
    this.self = this;

    var listeners = [];
    this.addListener = function (funct) {
        listeners.push(funct);
    };
    this.removeListener = function (funct) {
        var index  = listeners.indexOf(funct);
        if(index > 0) {
            listeners.splice(index, 1);
        }
    };
    this.notify = function (event) {
        for (var i = listeners.length - 1; i >= 0; i--) {
            listeners[i].event(event);
        }
    };
};

var list = [];
Motor.prototype.run = function() {
    // list all active agents
    list = [];
    for (var i = 0; i < this.environment.currentState.length; i++) {
        for (var j = 0; j < this.environment.currentState[i].length; j++) {
            var agent = this.environment.currentState[i][j];
            if(!agent) continue;
            list.push(agent);
        }
    }
    // shuffle the agents
    shuffle(list);
    // executes the agent action
    while(list.length > 0) {
        var agent = list.pop();
        if(agent.x == -1) continue;
        //table[agent.y*settings.state.width + agent.x].className = 'current';
        agent.doIt();
    }
    this.environment.chrono++;
    this.notify("RUN");
};

Motor.prototype.isFinalState = function () {
    return false;
};

/**
 * Start or pause the program
 */
Motor.prototype.start = function() {
    var that = this;
    if(interval != null) {
        this.stop();
        this.notify("PAUSE");
        return false;
    }
    that.notify("START");
    interval = setInterval(function () {
        if(that.isFinalState()) {
            that.stop();
            that.notify("END");
            return;
        }
        that.run();
    }, 20);
    return false;
};

/**
 * Stop the program
 * @return {[type]} [description]
 */
Motor.prototype.stop = function () {
    clearInterval(interval);
    interval = null;
    return false;
};

/**
 * resume the program
 * @return {[type]} [description]
 */
Motor.prototype.resume = function () {
    this.start();
    this.notify("RESUME");
    return false;
};

Motor.prototype.init = function () {
    this.environment.init();
    this.notify("INIT");
};