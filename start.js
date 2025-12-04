const start = document.querySelector(".quizz");
const clock = document.querySelector(".timer");
start.addEventListener("click",add);
let clickCount = 0
 function game (){
    window.location.href = "unilorintrivia/game.html"
 }
 function add() {
    clickCount++
    if (clickCount > 0){
        clock.className =  clock.className.replace("d-none","d-block")
    }
    e.preventDefault()
}

function timer() {
    clock.className = clock.className.replace("d-block","d-none")
     e.preventDefault()
}
//  two () {
//      window.location.href
//  } 


