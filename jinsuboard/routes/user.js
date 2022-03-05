const express = require("express");
const router = express.Router();

router.route("/join").get(function(req,res){
    res.render("user/join");
});


module.exports = router;