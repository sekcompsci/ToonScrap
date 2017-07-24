// Import Library //
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

// Define Varriable //
var app = express();
var port = process.env.PORT || 7777;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Define type //
app.get('/api/storys', function(req, res) {
    var url = 'http://www.niceoppai.net/';

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var cartoon = [];

            $('.grp').filter(function() {
                $(this).children('.row').each(function() {
                    var img = $(this).find('img').attr('src');
                    var name = $(this).find('.ttl').attr('title');
                    var link = $(this).find('.ttl').attr('href');

                    img = img.replace(/36/, 200);
                    link = link.split("/");

                    cartoon.push({ 'name': name, 'img': img, 'link': link[3] });
                });
            })

            res.json(cartoon);
        }
    });
});

app.get('/api/chapters/:name', function(req, res) {
    var name = req.params.name;
    var url = 'http://www.niceoppai.net/' + name;

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var cartoon = [];

            $('.lst').filter(function() {
                $(this).children('.lng_').each(function() {
                    var link = $(this).find('a').attr('href');
                    var name = $(this).find('.val').text();
                    var date = $(this).find('.dte').text();

                    cartoon.push({ 'name': name, 'link': link, 'date': date });
                });
            })

            res.json(cartoon);
        }
    });
});

app.get('/api/pages/:name/:chapter/:num?', function(req, res) {
    var name = req.params.name;
    var chapter = req.params.chapter;
    var num;

    if (req.params.num == undefined) {
        num = 1;
    } else {
        num = req.params.num;
    }

    var url = 'http://www.niceoppai.net/' + name + '/' + chapter + '/' + num;

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var cartoon = [];

            $('.prw').filter(function() {
                $(this).children('a').each(function() {
                    var img = $(this).find('img').attr('src');

                    cartoon.push({ 'img': img });
                });
            })

            res.json(cartoon);
        }
    });
});

app.get('/api/pageall/:name/:chapter', function(req, res) {
    var name = req.params.name;
    var chapter = req.params.chapter;
    var url = 'http://www.niceoppai.net/' + name + '/' + chapter + '/?all';

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var cartoon = [];

            $('.mng_rdr').filter(function() {
                $(this).children('center').each(function() {
                    var img = $(this).find('img').attr('src');

                    if (img != null) {
                        cartoon.push({ 'img': img });
                    }
                });
            })
            res.json(cartoon);
        }
    });
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});