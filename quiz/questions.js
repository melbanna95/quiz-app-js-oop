class Question {
    constructor(question){
        this.questionElement = document.getElementById('questions')
        this.answeredElements = [
            document.getElementById('a1'),
            document.getElementById('a2'),
            document.getElementById('a3'),
            document.getElementById('a4')
        ]
        this.theCorrectAnswer = question.correct_answer
        this.question = question.question;
        this.isCorrect = false;
        this.answers = [question.correct_answer,...question.incorrect_answers]
    }
    answer  (checkedElement){
        this.isCorrect = checkedElement[0].textContent === this.theCorrectAnswer ? true : false
    }
    render  (){
        this.questionElement.innerHTML = this.question;
        this.answeredElements.forEach((el,index) =>{
            el.innerHTML = `<input type='radio' name ='radio'>` + this.answers[index]
        })
    }
}
export default Question;