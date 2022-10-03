const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
for (var i = 0; i < 15; i++) {
    ctx.fillRect(i * 10, i * 10, 10, 10);
}





const canvasMen = document.getElementById('canvas_men');
const context = canvasMen.getContext('2d');
context.fillRect(125, 30, 50, 50)
context.fillRect(145, 80, 10, 20)
context.fillRect(50, 100, 200, 10)
context.fillRect(100, 110, 100, 100)
context.fillRect(100, 210, 10, 80)
context.fillRect(190, 210, 10, 80)