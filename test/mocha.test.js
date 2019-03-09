"use strict";

const log = console.log;

/* global */

const model = require("./models/");

const amount = 100;
const stock = "fb";
const user = "jarret";

model.trx.buy(amount, stock, user);

log("mocha test executed successfully from ./test/mocha.test.js");

// test runner
// mocha
// jest
// jasmine

// assertion
// expect
// chai

/*global describe*/
/*
describe("calculation", function () {
  it("should add them together", function () {
    const result = calculate(2, 3); //5
    // assertion library
    assertion.equal(result, 5);
  });
});
*/