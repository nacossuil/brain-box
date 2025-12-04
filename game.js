
let timer = document.querySelector(".timer")
let quest = document.querySelector(".Question")
let done = document.querySelector(".done")
let next = document.querySelector(".next")
let list = document.querySelectorAll(".list")
const points = document.querySelector(".points")


  list.forEach ( list => {list.addEventListener("click", function(){
    //  list.forEach( lis => lis.classList.remove("active")) 
 
     list.classList.toggle("active")
    

  })})
  // THE ABOVE WORKS BUT BETTER IF WE CAN USE EVENT DELEGATION
let seconds = "00"
let minutes = "00"
let hours = "00"
window.onload = function() {
  startTime()
  getURL()
}
function startTime() {
  setInterval(() => {
    time()
    timer.innerHTML = ` ${hours}:${minutes}:${seconds}`
  }, 1000 )
}

function time() {
  seconds ++
  if (seconds === 60){
    seconds="00"
  minutes ++
} 
if (minutes === 60) {
  minutes = 0
  hours ++
}
}

let questions = []
index = 0
point = 0
function showQuestion() {
  if (index === 10){
    next.inner = ""

  }
  quest.innerHTML= `<strong> ${questions[index].question}</strong>`
  done.innerHTML = `${index + 1}`
  function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
   let j =  Math.floor((Math.random() * (i + 1)));
  [arr[i], arr[j]] = [arr[j], arr[i]]
  } 

  return arr
}
  let correctAnswer = questions[index].correct_answer
let incorrectAnswers = questions[index].incorrect_answers
 let combined = [correctAnswer,...incorrectAnswers]
 let shuffle = shuffleArray(combined)
 const option = document.querySelectorAll(".list")
 option.forEach((li,i) => { 
  li.textContent = shuffle[i]
 })

//  next.addEventListener("click" ,next) 
 let point = 0
 function next() {

 }

}
let counter = 0
function nextQuestion() {
   index++
   showQuestion()
   shuffleArray()
   
   e.preventDefault
}
async function getURL() {
try {
    let result = await fetch ("https://opentdb.com/api.php?amount=10&category=19&type=multiple")
  let data = await result.json()
  if (!data.results || data.results.length === 0 ){
    console.log("request failed")
    return
  }
   questions = data.results
  showQuestion()

}
catch (error) {
console.log("Fetch failed")
}
console.log(questions)
}

 function correctAnswers (data) {
  // let Correct = data.results[0].correct_answer
  // let incorrect = data.results[0].incorrect_answers
  // console.log (Correct)
  // console.log(incorrect)
  
 }
 getURL()
 correctAnswers()
