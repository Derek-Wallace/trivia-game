import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class TriviaApiService{
  async getQuestions(){
    let res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
    let data = await res.json()
    console.log(data)
    ProxyState.questions = data.results.map(q => new Question(q))
    console.log(ProxyState.questions)
    
  }
}

export const triviaApiService = new TriviaApiService()