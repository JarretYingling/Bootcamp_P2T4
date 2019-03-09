"use strict";
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


/*
tblStocks = sqlTable(tbl_stocks);
sequelize.tblStocks.hasMany(tblStockPrices);

tblStockPrices = sqlTable(tbl_stock_prices);
sequelize.tblStockPrices.belongsTo(tblStocks);
*/