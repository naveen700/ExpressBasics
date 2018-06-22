console.log('this is the server file');


const express = require('express');
var app = express(); // to createthe app we have to do this call only

//down below we have route handler, to handle the  routes
app.get('/'  , (req, res) => {
    //res.send('<h1>ths is express<h1>');
    // to send json object we just use js object experss auto converts the js to json object then send it to the browser
    res.send({
        name : 'Naveen rana',
        dev : 'Software developer',
        age:22,
        exp:'Fresher'
    }) 


});

// another route handled here
app.get('/about',(req, res) =>{
    res.send('this is the  about page');    


})

// aassigment
app.get( '/bad' , (req, res) => {
    res.send({
        Found : 404
     ,  errorMessage : 'Bad Request'
    })


} )



// to bind the application to port of machine we need app.listen
app.listen(3000);
