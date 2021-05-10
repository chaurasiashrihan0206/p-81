canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(250 , 210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(350 , 210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(450 , 210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(300 , 250 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(400 , 250 , 40 , 0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    m_x=e.clientX-canvas.offsetLeft;
    m_y=e.clientY-canvas.offsetTop;
    console.log("x = " + m_x + ",y = " + m_y);
    circle(m_x,m_y);
}

function circle(m_x,m_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(m_x , m_y , 40 , 0 , 2*Math.PI);
ctx.stroke();
}