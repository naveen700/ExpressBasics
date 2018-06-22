console.log('this is the server file');

const hb = require('hbs');
const express = require('express');
const fs =  require('fs');
var app = express(); // to createthe app we have to do this call only

//down below we have route handler, to handle the  routes
app.set('view engine','hbs'); // this is used to set the view enine as hbs
hb.registerPartials(__dirname+"/partials");

//to register express middleware
app.use((req,res, next)=> {
    var dt  =   new Date().toString();
    console.log(`${dt} and request type is ${req.method}`); 
    fs.appendFileSync('server.log' , `${dt} and type ${req.method}`+ '\n');
    next();

});

app.use((req,res, next) =>{
    res.render('Maintainence.hbs')
;
})





//we can register helper  to provide same functionality for every page
hb.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hb.registerHelper('toUpper' ,(text) => {
    return text.toUpperCase();
});



app.get('/'  , (req, res) => {
    //res.send('<h1>ths is express<h1>');
    // to send json object we just use js object experss auto converts the js to json object then send it to the browser
    // res.send({
    //     name : 'Naveen rana',
    //     dev : 'Software developer',
    //     age:22,
    //     exp:'Fresher'
    // }) 


    res.render('home.hbs', {
        name : 'naveen'
        ,msg : 'Welcome'

    });




});

// another route handled here
app.get('/about',(req, res) =>{
    //res.send('this is the  about page');    
    //now we have our template we could use those templates to render
    // hbs is template we created inside views folder

    res.render('about.hbs', {
        pageTitle : 'AboutUs'
    });

})

// aassigment
app.get( '/bad' , (req, res) => {
    res.send({
        Found : 404
     ,  errorMessage : 'Bad Request'
    })


} )
//app.use is used to use any 3rd party middleware
// express.static()this is the express built in middleware  which can used to handle the auto handle all the routes
app.use(express.static(__dirname+ '/public')) ;



// to bind the application to port of machine we need app.listen
app.listen(3000);

// note : - view is used as default folder by the expess for template