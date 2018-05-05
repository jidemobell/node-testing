const express = require ('express');

var app = express();

app.get('/', (req,res)=>{
    res.status(404).send({
        error: "Page Not Found",
        name: "enyo App"
    })
})

app.listen(4000, ()=>{
    console.log('Starting server on port 4000')
});

module.exports = {
    app
}