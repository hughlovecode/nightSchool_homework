const assert = require('assert');
const check = require('./../src/utils/checkData').check;
const checkTestJson = require('./testInputAndOutput/checkDataJson.json')

describe('InitData Tests', function() {
    describe('rightInput Tests', function() {
        it('test1', function(done) {
            assert.equal(check(checkTestJson.list[0].input), checkTestJson.list[0].output);
            done();
        });
    });

    describe('wrongInput Tests', function() {
        it('test1', function(done) {
            assert.equal(check(checkTestJson.list[1].input), checkTestJson.list[1].output);
            done();
        });
    });
});