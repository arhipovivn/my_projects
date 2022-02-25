// const fs = require('fs');
// // console.log(fs);
// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     // console.log(data); // добавтл кодировку чтобы вывело нормальный текст 
//     // далее ф-я колбэк с двумя пар-ми (ошибка ,информация )

//     fs.mkdir('./files', () => {}); // содзание папки 

// fgdf
//     fs.writeFile('./files/text1.txt', data, () => {}) // создал полную копию text.txt
// });
// fs.rmdir('./files', () => {});
// fs.existsSync('./files') ? console.log('lf') : console.log('fgfg')




// const EventEmitter = require('events'); // импорт модуля 
// const emitter = new EventEmitter(); //экземпляр события в модуле
// emitter.on('some_event', (text) => { // первый аргумент произвольно имя события , второй колбэк ф-я
//     console.log(text);
// });
// emitter.emit('some_event', 'Привет ');




// !работа с потоками
// const zlib = require('zlib'); //поток для трансформации  примеру сжатию
// const fs = require('fs');
// const readStr = fs.createReadStream('./text.txt'); // создагние читающего потока 
// const writeStream = fs.createWriteStream('./new_text.txt'); // создание пишущего потка 
// const compressStream = zlib.createGzip(); // поток для сжатия
// // readStr.on('data', (chunk) => {
// //     writeStream.write(chunk); // создал полную копию текст предается частями 
// // });
// readStr.pipe(compressStream);



//! создание сервера
const http = require('http');
const fs = require('fs');
const path = require('path'); // формирование корректного пути 
const port = 3000;
const server = http.createServer((req, res) => {
    console.log('server request');
    console.log(req.url, req.method) // получение урл и метода запроса на сервер 
    res.setHeader('Content-Type', 'html'); // передаем html текст в write ,json
    // res.write('<h1>hello world</h1>');
    // const data = JSON.stringify({ //приведение к типу json
    //     name: 'ivan',
    //     age: 23
    // });
    const createPath = (page) => path.resolve(__dirname, 'vi', `${page}.html`); // кроссплатформенная работа сервера 

    switch (req.url) {
        case '/':
            basePath = createPath('in');
            break;
        case '/cont':
            basePath = createPath('cont');
            break;

    }

    fs.readFile(basePath, (err, data) => {
            if (err) {
                console.log(err);
                res.end();

            } else {
                res.write(data);
                res.end();

            }
        })
        // res.write()
        // res.end(); // сигнал о том что ответ сформирован и его можно отправлять пользователю 
})
server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`losterning localhost${port}`)
})