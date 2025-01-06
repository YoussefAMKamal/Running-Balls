const StartBtn = document.getElementById('StartBtn');
const AddBall = document.getElementById('AddBall');
const Box = document.getElementById('Box');
const Ball = document.getElementsByClassName('Ball');
const noBalls = document.getElementById('noballs');

const BorderWidth = Box.clientWidth;
const BorderHeight = Box.clientHeight;
const BallDim = Ball[0].offsetWidth;

const MinWidth = MinHeight = 0;
const MaxWidth = BorderWidth - BallDim;
const MaxHeight = BorderHeight - BallDim;

let x = 0, y = 0, speed = 50, xDirection = 1, yDirection = 1, handler, balls = [], ballsNo = 0;
let colors = ["Black", "Yellow", "Red", "Green", "Cyan" , "Purple", "Silver", "Brown", "DarkBlue", "DarkCyan", "Crimson", "GoldenRod", "Indigo", "Lime", "Bisque", "DeepPink"];

noBalls.innerText = `No. of Balls = ${balls.length}`;
addball();

const moveBall = function(){
    for(let i = 0; i < balls.length; i++)
    {    
        if(balls[i].xDirection === 1)
        {
        if(balls[i].x < MaxWidth)
            {
                balls[i].x = balls[i].x + speed > MaxWidth ? MaxWidth : balls[i].x + speed;
            }
            else
            {
                balls[i].xDirection = -1;
            }
        }
        else
        {
            if(balls[i].x > MinWidth)
            {
                balls[i].x = balls[i].x - speed < MinWidth ? MinWidth : balls[i].x - speed;
            }
            else
            {
                balls[i].xDirection = 1;
            }
        }

        if(balls[i].yDirection === 1)
            {
            if(balls[i].y < MaxHeight)
                {
                    balls[i].y = balls[i].y + speed > MaxHeight ? MaxHeight : balls[i].y + speed;
                }
                else
                {
                    balls[i].yDirection = -1;
                }
            }
            else
            {
                if(balls[i].y > MinHeight)
                {
                    balls[i].y = balls[i].y - speed < MinHeight ? MinHeight : balls[i].y - speed;
                }
                else
                {
                    balls[i].yDirection = 1;
                }
            }
        balls[i].element.style.left = `${balls[i].x}px`;
        balls[i].element.style.top = `${balls[i].y}px`;
    }
}

StartBtn.onclick = start;
AddBall.onclick = addball;

function addball() {
    x = Math.random() * MaxWidth + 1;
    y = Math.random() * MaxHeight + 1;

    let newBall = document.createElement("div");

    let element = document.getElementById("Box").appendChild(newBall);

    newBall.className = "Ball";
    newBall.style.backgroundColor = `${colors[Math.round(Math.random() * 15)]}`;

    newBall.style.left = `${x}px`;
    newBall.style.top = `${y}px`;

    balls.push({element: element, no: ballsNo++, x: x, y: y, xDirection: 1, yDirection: 1});

    noBalls.innerText = `No. of Balls = ${balls.length}`;
}

function start(){
    handler = window.setInterval(moveBall, 200);
    StartBtn.innerText = "Stop";
    StartBtn.onclick = stop;
    AddBall.hidden = 1;
}

function stop(){
    window.clearInterval(handler);
    StartBtn.innerText = "Start";
    StartBtn.onclick = start;
    AddBall.hidden = 0;
}