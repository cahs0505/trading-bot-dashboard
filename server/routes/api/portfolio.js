const mongoose = require('mongoose');
const router = require('express').Router();
const Portfolio = mongoose.model('Portfolio');

router.get("/portfolio", async (req, res) => {
	const portfolio = await Portfolio.find().sort({ _id: -1 }).limit(1)
	
	return res.status(200).json(portfolio[0]);
});

router.get("/portfolio/history", async (req, res) => {
	const portfolio = await Portfolio.find()
	
	return res.status(200).json(portfolio.slice(-1000));
});

router.get("/portfolio/history/:name", async (req, res) => {
	const name = req.params.name
	
	const portfolio = await Portfolio.find({algo: {$elemMatch: {name:name}}}).sort('date').exec();
	
	let response_data = []
	for (let i =0; i < portfolio.length; i++){
		
		data = {
			"date": portfolio[i].date,
			"algo": portfolio[i]["algo"].find(data=> data.name === name)
		}
		
		response_data.push(data)
	}

	return res.status(200).json(response_data.slice(-1000));
});


module.exports = router;