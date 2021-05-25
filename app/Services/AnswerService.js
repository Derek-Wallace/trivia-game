import { ProxyState } from "../AppState.js"

class AnswerService{
  answer(userAnswer, correctAnswer){
    if (userAnswer == correctAnswer){
      alert('Correct!')
      ProxyState.numCorrect++
    } else {alert (`Incorrect, Correct answer: ${correctAnswer}`)}
    app.questionsController.nextQ()
  }
}

export const answerService = new AnswerService