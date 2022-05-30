document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
    
});
let btn = document.getElementById("btnreset");
function handleClick(event){



    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
       setTimeout(()=>{
        alert(" O jogo Acabou - O Vencedor foi " + playerName);
       },200);
      
    };
    updateSquares();

}

function updateSquares(){

     let squares = document.querySelectorAll(".square");

     squares.forEach((square) => {
         let position = square.id;
         let symbol = board[position];

         if (symbol !='') {
             square.innerHTML = `<div class='${symbol}'></div>`
         }

         
         function restartGame(){
           if( gameOver = true){
               gameOver = false;
               playerName = 0;
               board = ['','','','','','','','',''];
     
           }else{
               return isWIn();
           }
            
            
        }
         
         
        }
    
     )
   
    
    } 
    function refreshPage(){
        window.location.reload();
    } 
            
    // function playpause(){
    //     if (audio.paused){
    //         play1.setAttribute("src", "./assets/pause.png");
    //         audio.play();
    //     } else {
    //         play1.setAttribute("src", "./assets/play.png");
    //         audio.pause();
    //     }
    // }