const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_Users = [
    {
        username: "adarsh@gmail.com",
        password: "adarsh123",
        name: "Adarsh Singh"
    },
    {
        username: "john@gmail.com",
        password: "john123",
        name: "John Doe"    
    },
    {
        username: "jane@gmail.com",
        password: "jane123",
        name: "Jane Smith"
    }
];

function userExists(username, password){
    // write logic to check if user exists in ALL_Users array
    let userExists = false;
    for(let i=0;i<ALL_Users.length;i++){
        if(ALL_Users[i].username === username && ALL_Users[i].password === password){
            userExists = true;
            break;
        }
    }
    return userExists;
}

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username,password)){
        return res.status(403).json({
            message: "user does not exist in our memory db"
        });
    }
    var token = jwt.sign({username: username},jwtPassword);
    return res.json({
        token,
    })
})

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return the list of users in ALL_Users array except the user with username
        res.json({
            user:ALL_Users.filter(function(value){
                if(value.username == username){
                    return false;
                }
                return true;
            })
        })
    }catch(err){
        return res.status(403).json({
            message: "invalid token"
        });
    }
})

app.listen(3006);