'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = this[0];
    let startIndex = 1;

    if (arguments.length > 1) {
      result = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
