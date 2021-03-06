/**
 * Created by Arjan on 28-6-2017.
 */
const fs = require("fs"),
    logger = require('../../model/logger');
var blocks = [];
var items = [];

/**
 * init function that loads the resources files into memory
 */
module.exports.init = function(){
    logger.log("[CSV-Parser] Loading in files ...");
    var string1 = fs.readFileSync('./resources/block.csv',"utf8");
    var string2 = fs.readFileSync('./resources/item.csv',"utf8");

    logger.log("[CSV-Parser] Creating the map ...");
    blocks = string1.split('\n');
    items = string2.split('\n');
};

/**
 * Method that returns the blocks from the file
 * @returns {Array} The array with blocks
 */
module.exports.getBlocks = function () {
    return blocks;
};

/**
 * Method that returns the items from the file
 * @returns {Array} The array with items
 */
module.exports.getItems = function () {
    return items;
};