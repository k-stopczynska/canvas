const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //getting context for the canvas
//setting canvas size to users dimentions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//defining lines endpoint, joining and color
ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;

//resetting values of X and Y and drawing movement
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return // stops assigning mouse position into drawing when mouse is not down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue} 100% 50%)`;
   
    ctx.beginPath();//method envoked to draw different line
    ctx.moveTo(lastX, lastY);//method envoked for starting point
    ctx.lineTo(e.offsetX, e.offsetY);//method envoked for ending point properties of event called
    ctx.stroke();//mothod to start drawing
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) {
        hue = 0;
    };
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    direction ? ctx.lineWidth ++ : ctx.lineWidth --;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
