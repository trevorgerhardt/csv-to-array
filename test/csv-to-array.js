
/**
 * Dependencies
 */

var assert = require('assert');
var toArray = require('csv-to-array');

/**
 * Mocha
 */

describe('csv-to-array', function() {
  it('should convert a csv to an array', function() {
    assert.deepEqual(toArray(csv), expected);
  });
});

/**
 * Vars
 */

var csv = 'name,title, company\nTrevor Gerhardt, Developer, "Conveyal, LLC"';
var expected = [{
  name: 'Trevor Gerhardt',
  title: 'Developer',
  company: 'Conveyal, LLC'
}];
