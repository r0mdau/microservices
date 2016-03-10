var env = require('./env');
var express = require('express');
var app = express();
var server = app.listen(env.port);
var http = require('http');

app
    .set('view engine', 'jade')
;

app
    .get('/', function (req, res) {
        res.render('index.jade', {env: env});
    })
    .get('/prenom/:prenom', function (req, res) {
        http.get("http://prenom:7001/" + req.params.prenom, function(resource) {
            var content = "";
            resource.on("data", function(chunk) {
                content += chunk;
            });
            res.json({foo: content});
        });
    })
;

app
    .use(function(req, res){
        res.redirect('/');
    })
;
