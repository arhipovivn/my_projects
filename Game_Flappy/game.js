let cvs = document.getElementById('canvas');
let ctx = cvs.getContext("2d");

let bird = new Image(); // Создание объекта
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png"; // Указание нужного изображения
bg.src = "img/bg.png";
fg.src = "img/ground.png";
pipeUp.src = "img/Up.png";
pipeBottom.src = "img/down.png";
gap = 80;
// при нажатии на кнопку любую
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 30;
}
// создание блоков 
let pipe = [];
pipe[0] = {
        x: cvs.width,
        y: 0
    }
    // позиция птицы 
let xPos = 10;
let yPos = 150;
let grav = 1.2;
let score = 0; // очки

function draw() {
    ctx.drawImage(bg, 0, 0); // отрисовка с координатами 
    for (let i = 0; i < pipe.length; i++) {

        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y); // верхней трубы 
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap); // отрисовка нижней трубы с пространством между ними 
        pipe[i].x--; // передвижение блоков 
        if (pipe[i].x == 125) { // если картинка переместилась на 125 пикселей рисуем новый блок 
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
        // отслеживание прикосновений
        if (xPos + bird.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipeUp.width - 10 && // если птица находится в пределах ширины блока 
            (yPos <= pipe[i].y + pipeUp.height - 10 || // если птица находится в пределах высоты  блока 
                yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) { // при касании земли 
            location.reload(); // Перезагрузка страницы
        }
        if (pipe[i].x == 5) {
            score++; // счетчик очков, при прохождении трубы увеличивается 
        }
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav; // графитация 

    ctx.fillStyle = "#000"; // цвет текста 
    ctx.font = "24px Vedana"; // размер шрифта              
    ctx.fillText("Счет: " + score, 10, cvs.height - 20) // позиция по х 10 пикселей 
    requestAnimationFrame(draw); // постоянный вызов функции отрисовки 


}

pipeBottom.onload = setInterval(draw(),
    100); // при загрузке фона игры мы рисуем остальные элементы