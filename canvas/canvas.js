const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
for (var i = 0; i < 15; i++) {
    ctx.fillRect(i * 10, i * 10, 10, 10);
}





const canvasMen = document.getElementById('canvas_men');
const contextMen = canvasMen.getContext('2d');
contextMen.fillStyle = 'YellowGreen';
contextMen.fillRect(125, 30, 50, 50)
contextMen.fillRect(145, 80, 10, 20)
contextMen.fillRect(50, 100, 200, 10)
contextMen.fillRect(100, 110, 100, 100)
contextMen.fillRect(100, 210, 10, 80)
contextMen.fillRect(190, 210, 10, 80)







const canvasLines = document.getElementById('canvas_lines');
const contextLines = canvasLines.getContext('2d');
contextLines.strokeStyle = "Turquoise";
contextLines.lineWidth = 4;
contextLines.beginPath();
contextLines.moveTo(10, 10);
contextLines.lineTo(60, 60);
contextLines.moveTo(60, 10);
contextLines.lineTo(10, 60);
contextLines.stroke();