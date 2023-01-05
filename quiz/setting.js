//https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
import Quiz from "./quiz.js"

class Setting {
    constructor(){
this.SettingDom = document.querySelector('.setting')
this.quizDom = document.querySelector('.quiz')
this.categoryDom = document.getElementById('category')
this.nQuestionsDom = document.getElementById('nQuestions')
this.startBtn = document.getElementById('start')
this.difficulty = [
    document.getElementById('easy'),
 document.getElementById('medium'),
 document.getElementById('hard')
]
this.quiz ={};
this.startBtn.addEventListener('click',this.startQuizApp)

    }
    startQuizApp  = async () => {
        try{
const amount = this.getAmount();
const categoryId = this.categoryDom.value;
const difficulty = this.getDifficulty();

const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`
let { results } = await this.fetchData(url) ;
console.log(results);
this.quiz = new Quiz(this.quizDom,amount,results)
this.toggleElment()

        }
        catch(err){
alert(err)
        }


// if (result){

// }


    }
    toggleElment = ()=>{
        this.quizDom.style.display= 'block'
        this.SettingDom.style.display= 'none'
    }
    getDifficulty = ()=>{
        const difficulty = this.difficulty.filter((el)=> el.checked);
        if(difficulty.length === 1){
            return difficulty[0].id
        } else {
            alert('please select difficulty')
        }
    }
    getAmount = ()=>{
        let amount = this.nQuestionsDom.value
        if(amount > 0 && amount <= 10){
            return amount

        } else{
            alert('wrong amount entry')
        }
    }
    fetchData = async (url) =>{
       const response = await fetch(url)
      const result = await response.json() 
       return result ;
    }
} 

export default Setting;