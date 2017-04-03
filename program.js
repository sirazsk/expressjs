/**
 * Created by sirazsk on 4/4/17.
 */
/*var express=require('express');
var path =require('path');
var app=express();
var bodyParser=require('body-parser');
app.use((bodyParser.urlencoded({extended: true})));
app.use(express.static(path.join(__dirname,'public')));

app.post('/form',function (req,res) {
    //res.render('index');
    //console.log('hey there');
    res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);*/


/*
var express=require('express');
var app=express();
app.use(require('stylus').middleware(process.argv[3]||__dirname+'/public'));
app.use(express.static(process.argv[3]||__dirname+'/public'));
app.listen(process.argv[2]);*/


/*var express = require('express');
var app=express();

app.put('/message/:id',function (req,res) {
    res.end(require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex'));

});
app.listen(process.argv[2]);*/


/*var express=require('express');
var app=express();
app.get('/search',function (req,res) {
    res.send(req.query);
});
app.listen(process.argv[2]);*/


/*var fs=require('fs');
var dat;
var express=require('express');
var app=express();

fs.createReadStream(process.argv[3]).
on('data',function (data) {
    dat=data.toString();
});

app.get('/books',function (req,res) {
    res.end(JSON.stringify(dat));
});
app.listen(process.argv[2]);*/
