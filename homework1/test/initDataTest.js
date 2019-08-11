const assert = require('assert');
const init = require('./../src/utils/InitData').init;
const initTestJson = require('./testInputAndOutput/initTestJson.json')

describe('InitData Tests', function() {
    describe('rightInput Tests', function() {
        it('test1', function(done) {
            assert.equal(init(initTestJson.list[0].url), initTestJson.list[0].res);
            done();
        });
    });

    describe('wrongInput Tests', function() {
        it('test1', function(done) {
            assert.equal(init(initTestJson.list[1].url), initTestJson.list[1].res);
            done();
        });
    });
});