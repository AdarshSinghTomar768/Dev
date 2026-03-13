const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        country: zod.enum(["USA", "Canada", "UK", "Australia"])
    })

    const response = schema.safeParse(obj);
    console.log(response);
    return response;
}

app.post('/login', function(req,res){
    const response = validateInput(req.body);
    if (!response.success){
        res.status(400).json({
            msg: "Input is invalid",
            error: response.error
        })
    }else{
        res.json({
            msg: "Login successful"
        })
    }
})

app.listen(3005);