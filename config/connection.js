"use strict";
/*eslint no-undef: "error"*/
/*eslint-env node*/

// require dotenv
const dotenv = require("dotenv").config({
  path: "git/.env"
});
if (dotenv.error) throw dotenv.error;

// require sequelize
let Sequelize = require("sequelize");

// create mysql connection with sequelize
let sequelize = new Sequelize("stocks_db");