const express = require('express');
const zod = require('zod');
const app = express();

app.use(express.json());

const schema = zod.array(zod.number());

// {
// email: string => email
// password: string => min 8 characters, max 20 characters, must contain at least one uppercase letter, one lowercase letter, one number and one special character
// country : string => must be one of the following: USA, Canada, UK, Australia
// }

const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    country: zod.enum(["USA", "Canada", "UK", "Australia"])
})

app.post('/health-checkup',function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success){
        res.status(400).json({
            msg: "Input is invalid"
        })
        
    }else{
        res.send({
            response
        })
    }
    
})



app.listen(3004);