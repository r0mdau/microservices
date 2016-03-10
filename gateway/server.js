var env = require('./env');
var express = require('express');
var app = express();
var server = app.listen(env.port);
var http = require('http');

app
    .set('view engine', 'jade')
;

function goData(res, resource) {
    resource.on("data", function (chunk) {
        res.write(chunk);
    }).on('end', function () {
        res.end();
    });
}

app
    .get('/', function (req, res) {
        res.render('index.jade', {env: env});
    })
    .get('/prenom/:prenom', function (req, res) {
        http.get("http://prenom:7001/" + req.params.prenom, function (resource) {
            goData(res, resource);
        }).on('error', function (e) {
            console.log(e.message);
        });
    })
    .get('/prenom/nombreDeLettre/:prenom', function (req, res) {
        http.get("http://prenom:7001/nombreDeLettre/" + req.params.prenom, function (resource) {
            goData(res, resource);
        }).on('error', function (e) {
            console.log(e.message);
        });
    })
;

app
    .use(function (req, res) {
        res.redirect('/');
    })
;
