const mongoose = require('mongoose');
const router = require('express').Router();
const Account = mongoose.model('Account');

//whole account history
router.get("/account", async (req, res) => {
    const accounts = await Account.find();
    
    return res.status(200).json(accounts);
});

//latest account status
router.get("/account/latest", async (req, res) => {
  const accounts = await Account.find().sort({ _id: -1 }).limit(1)
  
  return res.status(200).json(accounts[0]);
});

//history for net validation
router.get("/account/history/net_liquidation", async (req, res) => {
  const accounts = await Account.find({}).select('date net_liquidation');
  data = accounts.map(account=>({date:account.date,net_liquidation:account.net_liquidation}))
  return res.status(200).json(data);
});


module.exports = router;

