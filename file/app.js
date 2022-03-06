const fs = require('fs');
const path = require('path');

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}



function ranfomEng(n) {
    let stringEng = '';
    while (stringEng.length < n)
        stringEng += String.fromCharCode(Math.random() * 127).replace(/\W|\d|_/g, '');
    return stringEng;
}

function rendomRus(n) {
    let stringRus = '';
    while (stringRus.length < n)
        stringRus += String.fromCharCode(Math.random() * 1106).replace(/[^а-яА-ЯёЁ]|_/g, '');
    return stringRus;
}

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

function getRandomNum(number, fixed = 1) {

    let min = 1;
    let max = number

    let r = Math.random() * (max - min) + min
    let num = Math.floor(r)
    return num + Number(Math.random().toFixed(fixed));
}
for (let i = 1; i <= 100; i++)
    fs.writeFile(`text/new${i}.txt`, randomDate(new Date("05.11.17"), new Date()) + '||' + ranfomEng(10) + '||' + rendomRus(10) + '||' + randomNumber(1, 100000000) + '||' + getRandomNum(20, 8) + '\n', (err) => { if (err) console.log(err) })

function read(file, appendFile) {
    fs.readFile(appendFile, function(err, data) {
        if (err) throw err;
        console.log('file has read');

        fs.appendFile(file, data, function(err) {
            if (err) throw err;
            console.log('append to file')
        });


    });
}
for (let i = 1; i <= 100; i++) {
    file = './text/mn.txt';
    appendFile = `./text/new${i}.txt`;
    read(file, appendFile);
}




const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="/app.js" method="post">
        <input type="text" name='text'>
        <button> return</button> </form>
</body>

</html>`;
// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.post('app.js', urlencodedParser, (req, res) => {
//     console.log(req.body)
// })
const http = require('http');
http.createServer((req, res) => {
    console.log(req._read);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

}).listen(3000, () => { console.log('сервер работает ') })