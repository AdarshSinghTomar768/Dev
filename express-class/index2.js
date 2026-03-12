const express = require('express');
const app = express();

var users = [{
    name: "jhon",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

app.get('/',function(req,res){
    const jhonKidney = users[0].kidneys;
    const numberOfKidneys = jhonKidney.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0;i < jhonKidney.length; i++){
        if(jhonKidney[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        jhonKidney,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message: "Kidney added successfully"
    })
})

app.put('/',function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        message: "All kidneys are now healthy"
    })
})

app.delete('/',function(req,res){
    // only if atleast one kidney is unhealthy then do this else return 411
    if(atleastOneUnhealthyKidney()){
        const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        message: "All unhealthy kidneys are now removed"
    })
    }
    else{
        res.status(411).json({
            message: "All kidneys are healthy, no need to remove any kidney"
        })
    }
})

function atleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}



app.listen(3000);