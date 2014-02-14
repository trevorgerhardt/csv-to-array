
/**
 * Dependencies
 */

var each = require('each');

/**
 * Parse CSV
 */

module.exports = function csvToArray(csv) {
  var array = [];
  var rows = csv.split(/\r\n|\n/);
  var keys = rowToArray(rows.shift());

  each(rows, function(row) {
    var obj = {};
    var values = rowToArray(row);
    each(keys, function(key) {
      obj[key] = values.shift();
    });
    array.push(obj);
  });

  return array;
};

/**
 * Split a row and trim it
 */

function rowToArray(row) {
  return row.split(',').map(function(str) {
    return str.trim();
  });
}
