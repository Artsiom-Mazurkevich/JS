// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// let position = 0;
// setInterval(function () {
//     ctx.clearRect(0, 0, 200, 200);
//     ctx.fillRect(position, 0, 20, 20);
//     position++;
//     if (position > 200) {
//         position = 0;
//     }
// }, 10);


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const circle = (x, y, radius, fillCircle) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill()
    } else {
        ctx.stroke()
    }
}


const drawBee = (x, y) => {
    ctx.lineWidth = 2; // ширина линии
    ctx.strokeStyle = "Black"; //цвет линии
    ctx.fillStyle = "Gold"; //цвет заливки

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
}

drawBee(30, 30)


const update = function (coordinate) {
    const offset = Math.random() * 4 - 2;
    coordinate += offset;
    if (coordinate > 200) {
        coordinate = 200;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
};