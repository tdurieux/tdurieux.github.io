
"use strict";

function DijkstraEnvironment () {
    DijkstraEnvironment.__super__.constructor.apply(this, arguments);
    this.dijkstraMap = [];
    this.followers = [];
    this.preys = [];
};__extends(DijkstraEnvironment, Environment);

DijkstraEnvironment.prototype.init = function() {
    DijkstraEnvironment.__super__.init.apply(this, arguments);

    this.settings.state.background = '#F1F1F1';
    for (var j = this.currentState.length - 1; j >= 0; j--) {
        for (var i = this.currentState[j].length - 1; i >= 0; i--) {
            if(Math.random() > this.settings.wall.density) {
                continue;
            }
            var wall =  new Wall(this);
            var coord = this.createRandomPosition();
            if(coord == null) {
                continue;
            }
            wall.move(coord.x, coord.y);
        }
    }

    this.dijkstraMap = [];
    this.followers = [];
    this.preys = [];
    for (var i = 0; i < this.settings.follower.initial;  i++) {
        var follower = new Follower(this);
        var coord = this.createRandomPosition();
        if(coord == null) {
            continue;
        }
        follower.move(coord.x, coord.y);
        this.followers.push(follower);  
    }
    for (var i = 0; i < this.settings.prey.initial;  i++) {
        var prey = new Prey(this);
        var coord = this.createRandomPosition();
        if(coord == null) {
            return;
        }
        prey.move(coord.x, coord.y);
        this.preys.push(prey);
    }
    this.performGridPosition();
};

DijkstraEnvironment.prototype.performGridPosition = function () {
    var that = this;
    var used = {};
    var levels = [];
    function createDijkstraMap(level) {
        if(levels[level] == null) {
            levels[level] = [];
        }

        var previousLevel = levels[level - 1];

        for (var i = 0; i < previousLevel.length; i++) {
            that.neighbours(previousLevel[i].x, previousLevel[i].y, function(agent, x, y) {
                if(!that.dijkstraMap[x]) {
                    that.dijkstraMap[x] = [];
                }
                if(!(agent instanceof Wall) && that.dijkstraMap[x][y] == null) {
                    that.dijkstraMap[x][y] = level;
                    levels[level].push({x:x, y: y});
                }
            });
        }
    }
    var level = 0;
    levels[level] = [];
    for (var i = 0; i < this.preys.length; i++) {
        var to = this.preys[i];
        levels[level].push(to);
        this.dijkstraMap[to.x] = [];
        this.dijkstraMap[to.x][to.y] = 0;
    }
    
    while(levels[level].length > 0) {
        levels[++level] = [];
        createDijkstraMap(level);
    }
};

DijkstraEnvironment.prototype.getNextPosition = function (from, to) {
    var that = this;

    var directions = [];
    var min = this.settings.state.width * this.settings.state.height;
    this.neighbours(from.x, from.y, function(agent, x, y) {
        if(!(agent instanceof Wall) && !(agent instanceof Follower)) {
            if(that.dijkstraMap[x] != null && that.dijkstraMap[x][y] != null) {
                if(that.dijkstraMap[x][y] == min) {
                    directions.push({x:x, y:y});
                } else if(that.dijkstraMap[x][y] < min) {
                    directions = [];
                    directions.push({x:x, y:y});
                    min = that.dijkstraMap[x][y];
                }
            }
        }
    });
    shuffle(directions);
    if(directions.length > 0) {
        return directions[0];
    }
    return null;
};

DijkstraEnvironment.prototype.getNextPositionPrey = function (from) {
    var x = this.followers[0].x;
    var y = this.followers[0].y;
    for (var i = this.followers.length - 1; i >= 1; i--) {
        x += this.followers[i].x;
        y += this.followers[i].y;
    };
    x = parseInt(x / this.followers.length);
    y = parseInt(y / this.followers.length);

    var toX = parseInt(x + this.settings.state.width / 2) % (this.settings.state.width - 1);
    var toY = parseInt(y + this.settings.state.height / 2) % (this.settings.state.height - 1);

    while(this.currentState[toX][toY] != null) {
        toY = (toY + 1) % (this.settings.state.height - 1);
        toX = (toX + 1) % (this.settings.state.width - 1);
    }
    return this.getNextPosition(from, {x: toX, y: toY});
};

DijkstraEnvironment.prototype.eatPrey = function (prey) {
    for (var i = this.preys.length - 1; i >= 0; i--) {
        if(this.preys[i].x == prey.x && this.preys[i].y == prey.y) {
            this.preys.splice(i, 1);
            var elem = this.currentState[prey.x][prey.y];
            var index = list.indexOf(elem);
            if(index > -1)
                list.splice(index, 1);
            this.currentState[prey.x][prey.y] = null;
            return true;
        }
    }
    return false;
};

DijkstraEnvironment.prototype.settings.prey = {
    initial: 20
};
DijkstraEnvironment.prototype.settings.follower = {
    initial: 4
};

DijkstraEnvironment.prototype.settings.wall = {
    density: 0.46
};