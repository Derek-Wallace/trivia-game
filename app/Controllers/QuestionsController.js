import { ProxyState } from "../AppState.js";
import { answerService } from "../Services/AnswerService.js";
import { triviaApiService } from "../Services/TriviaApiService.js";

function getQuestions(){
  triviaApiService.getQuestions()
}

function draw(){
  if (ProxyState.questions[0] == undefined){
    alert(`Game finished, score: ${ProxyState.numCorrect}/10`)
    location.reload()
  }
  let question = ProxyState.questions[Math.floor(Math.random() * ProxyState.questions.length)].data
  let answers = []
  answers.push(question.correct_answer)
  question.incorrect_answers.forEach(a =>{
    answers.push(a)
  })
  answers.sort(() => Math.random() - 0.5)
  document.getElementById('trivia').innerHTML = `<div class="col-md-4 mx-auto my-4"><h4>${question.question}</h4></div>"`
  let template = ''
  answers.forEach(a => {
    template += `
    <div class="col-md-3 text-center"><button class="btn btn-primary block" onclick="app.questionsController.answer('${a}', '${question.correct_answer}')">${a}</button></div>
    `
  })
  document.getElementById('answers').innerHTML = template
  ProxyState.questions = ProxyState.questions.filter(q => q.data != question)
}

export class QuestionsController{
  constructor(){
    getQuestions()
  }

  startGame(){
    if (ProxyState.questions != []){
      draw()
    }
  }
  answer(userAnswer, correctAnswer){
    answerService.answer(userAnswer, correctAnswer)
  }
  

  nextQ(){
    draw()
  }
}