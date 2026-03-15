const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = "123456";

mongoose.connect(
"mongodb+srv://adarshsinghtomar7909043383:f7qmGhcx31hzIRk4@cluster0.jqacolf.mongodb.net/usersDB"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const app = express();
app.use(express.json());

const User = mongoose.model('User', {
    username: String,
    password: String,
    name: String
});


// function userExists(username, password){
//     // should check inthe database
    
// }

app.post('/signin',async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    // should check in the database if user exists or not
     
    const existingUser = await User.findOne({username: username});
    if(existingUser){
        return res.status(400).json({
            message: "Username already exists"
        });
    }

    const user = new User({
        username,
        password,
        name
    });
    await user.save();
    res.json({
        message: "User created successfully"
    })
})

// app.get("/users",function(req,res){
//     const token = req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         // return the list of users in ALL_Users array except the user with username
//         res.json({
//             user:ALL_Users.filter(function(value){
//                 if(value.username == username){
//                     return false;
//                 }
//                 return true;
//             })
//         })
//     }catch(err){
//         return res.status(403).json({
//             message: "invalid token"
//         });
//     }
// })

app.listen(3008);