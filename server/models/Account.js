const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
	date: Date,
    available_funds : String,
	buying_power: String,
	equity_with_loan_value: String,
	excess_liquidity: String,
	full_init_margin_req: String,
	full_maint_margin_req: String,
	gross_position_value: String,
	net_liquidation: String,
	total_cash_value: String
  });

mongoose.model("Account", accountSchema)