const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-checkup',function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
})

// input validation
// global catch for all routes
app.use(function(err,req,res,next){
    console.log(err);
    res.status(500).json({
        msg: "Sorry something is up with our server"
    })
})

app.listen(3003);