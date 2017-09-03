/*var express = require('express');
var app = express();*/

/*var express = require('express');
var app = express();
app.use('/myfiles',express.static(__dirname + '/../../../Pics/WorkImages'));
//console.log(__dirname);
app.get('/something',function(req,res){
    res.send('Hello World !');
});
app.listen(8080,function(){
    console.log('starting the server ..');
});*/

/*var express = require('express');
var app = express();
var path = require('path');
app.get('/',function(req,res){
    res.sendFile('index.html',{root: path.join(__dirname,'/skeleton')});
});
app.use('/myfiles',express.static(__dirname + '/styles'));
app.listen(8080,function(){
    console.log('Listening has started ..');
});*/

/*var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
app.get(/^(.*)$/,function(req,res){
    try {
        console.log(req.params);
        console.log(path.join(__dirname,'/skeleton/',req.params[0] + '.html'));
        console.log(fs.statSync(path.join(__dirname,'/skeleton/',req.params[0] + '.html')).isFile());
        //if(fs.statSync(path.join(__dirname,'\\skeleton\\',req.params[0].slice(1) + '.html')).isFile())
            res.sendFile(req.params[0] + '.html',{root: path.join(__dirname,'/skeleton')});
    }
    catch (error) {
        res.sendFile('error404.html',{root: path.join(__dirname,'/skeleton')});
    }
});
app.listen(8080,function(){
    console.log('Server chal pdaa hai bhaaaaiiii ..');
});*/

// GET : http://localhost:8080/?firstName=Rishabh&lastName=Kashyap (via url)
// POST : same but under the hood; encryption via https

/*var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
    res.end(JSON.stringify(req.query));
});
app.listen(8080,function(){
    console.log('server has started ..');
});*/

/*var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// client (browser) --> server --> [body-parser] --> client (browser)
app.use(bodyParser());
app.get('/',function(req,res){
    res.sendFile('index.html',{root: path.join(__dirname,'/skeleton')});
});
app.post('/',function(req,res){
    res.end(JSON.stringify(req.body)); // in GET we do req.query
});
app.listen(8080,function(){
    console.log('server has started ..');
});*/

// Cookies - raw strings of information stored on the browser of the user; for every request they are sent to the server
/*var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/',function(req,res){
    res.cookie('myFirstCookie','Patanjali laaya hai "Ayurvedic Cookie" !');
    res.end('summum bonum ..');
});
app.get('/removecookie',function(req,res){
    res.clearCookie('myFirstCookie');
    res.end('summum bonum, bro, summum bonum ..');
});
// document.cookie
app.listen(8080,function(){
    console.log('Weltanschauung ..');
});*/

// what so ever is passed in 'app.use()' watches over the play of get() & post() methods and, thus, fires events & does things, if & when required, from under the hood.

var express = require('express');
var app = express();
var router = express.Router();
/*app.use('/myrouter',router);
router.get('/router01',function(req,res){
    res.end('Sab moh maya hai !');
});
router.get('/router02',function(req,res){
    res.end('Mere kehne ka matlab hai, "Brahma Sata Jagata Mithya` !" !');
});*/
app.use('/user',router);
router.get('/:username(\\w+)',function(req,res){
    res.end(JSON.stringify(req.params));
});
app.listen(8080,function(){
    console.log('lage raho ..');
});