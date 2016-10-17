var request = require('request');
var cheerio = require('cheerio');
var logger = require('morgan')
var template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
var express = require('express');
var app = express();

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function(req, res) {
    url = 'http://www.niceoppai.net/';
    console.log("Target : " + url);

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var json = {};
            var patern = {
                "data": [
                    {
                        "img": "",
                        "name": "",
                        "link": "",
                        "sec": [
                            {
                                "name": "",
                                "link": "",
                                "time": ""
                            }
                        ]
                    }
                ]
            };

            $('.grp').filter(function() {
                var i = 1;

                $(this).children('.row').each(function() {
                    var img  = $(this).find('img').attr('src');
                    var name = $(this).find('.ttl').attr('title');
                    var link = $(this).find('.ttl').attr('href');
                    console.log("img[" + i + "]  : " + img);
                    console.log("name[" + i + "] : " + name);
                    console.log("link[" + i + "] : " + link);
                    console.log("");

                    i++;
                });
            })
        }
    });

    try {
        var html = template({ title: 'Home' })
        res.send(html)
    } catch (e) {
        next(e)
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})