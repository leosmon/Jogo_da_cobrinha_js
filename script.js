
function iniciar (){

// js da barra de pontuação e botão de reiniciar//
var btn = document.querySelector("button")
btn.style.visibility ="hidden"


 var contador = document.querySelector('.ponto');
 contador.textContent = 0
var ultima = document.querySelector('.ultima')

function addPonto(){
    
   var numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;
}
//fim da barra de pontuação//




let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] ={
    x:8 * box,
    y:8 * box
}
let direction = "right";
let food ={
    x:Math.floor(Math.random()*15+1)*box ,
    y:Math.floor(Math.random()*15+1)*box 
}

function criarBG() {

    var fundoImg = new Image();
    
    context.fillRect(0, 0, 16 * box, 16 * box);
    fundoImg.src = "img/fundo2.jpg"
    context.drawImage(fundoImg, 0, 0); 
}




function criarCobrinha(){
    for(i = 0 ; i<snake.length;i++){
        context.fillStyle = 'blue';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    } 
}

function drawFood (){
    context.fillStyle = 'red'
    context.fillRect(food.x,food.y,box,box)
}


//movimentação //
document.addEventListener('keydown' , update);

function update(event){

    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

    

}
//===============//


//função principal do jogo//

function iniciarJogo(){
    
if(snake[0].x > 15 *box && direction == "right")snake[0].x =0;
if(snake[0].x < 0  && direction == "left")snake[0].x =15 * box;
if(snake[0].y > 15 *box && direction == "down")snake[0].y =0;
if(snake[0].y < 0  && direction == "up")snake[0].y =15* box;


    //condicional de game over//

for(i = 1 ;i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
        clearInterval(jogo)
        alert('Game Over')
        btn.style.visibility ="visible"
        ultima.textContent = contador.textContent
    }

}

    
    criarBG();
    drawFood();
    criarCobrinha();


    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right")snakeX += box;
    if (direction == "left")snakeX -= box;
    if (direction == "up")snakeY -= box;
    if (direction == "down")snakeY+= box;

    if(snakeX != food.x || snakeY != food.y ){
        snake.pop();  
    } else {
        food.x = Math.floor(Math.random()*15+1)*box 
        food.y = Math.floor(Math.random()*15+1)*box 
        addPonto()
        
        
    }
    

    
    
    let newHead = {
        x:snakeX,
        y:snakeY
    }
    snake.unshift(newHead);

 
}
let jogo = setInterval(iniciarJogo, 150)
}
let jogo = setTimeout(iniciar, 1000)




function reiniciar(){
    
    let jogo = setTimeout(iniciar, 1000)
}