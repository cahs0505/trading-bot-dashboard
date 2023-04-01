const mongoose = require('mongoose');

const algoSchema = new mongoose.Schema({
	name: String,
	symbol: String,
	position: String,
	realized_PnL: String,
	cum_ret: String,
	apr: String,
	sharpe: String,
	mdd: String
  });

const portfolioSchema = new mongoose.Schema({
	date: Date,
  	algo : [algoSchema] 
});

mongoose.model("Portfolio", portfolioSchema)