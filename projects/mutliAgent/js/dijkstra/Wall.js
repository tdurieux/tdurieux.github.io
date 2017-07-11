"use strict";

function Wall (environment, type) {
    Wall.__super__.constructor.apply(this, arguments);
};__extends(Wall, Agent);

Wall.prototype.getColor = function () {
    return "#333223";
};

/**
 * the agent does something
 * @return {[type]} [description]
 */
Wall.prototype.doIt = function () {
    
}