const assert = require('assert');
const sendEmail = require('./../src/utils/sendEmail').sendEmail;
const sendTestJson = require('./testInputAndOutput/sendEmailJson.json')

describe('InitData Tests', function() {
    describe('rightInput Tests', function() {
        it('test1', function(done) {
            assert.equal(sendEmail(sendTestJson.list[0].input), sendTestJson.list[0].output);
            done();
        });
    });

    describe('wrongInput Tests', function() {
        it('test1', function(done) {
            assert.equal(sendEmail(sendTestJson.list[1].input), sendTestJson.list[1].output);
            done();
        });
    });
});