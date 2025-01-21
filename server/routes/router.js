const express = require('express');
const router = express.Router();

router.get('/user', (req,res) =>{
    const userData = [
        {
            id: 1,
            username: "JohnDoes_78",
            age: 28,
            location: "Cape Town"
        }
    ]
    res.send(userData);
});

module.exports = router;