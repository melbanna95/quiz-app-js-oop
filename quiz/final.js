class Final{
    constructor(correctAnswer,totalAmount){
        this.scoreElemnt = document.getElementById('score')
        this.againBtn = document.getElementById('again')
        this.render(correctAnswer,totalAmount)
        this.againBtn.addEventListener('click',this.startAgain)
    }
    startAgain = ()=>{
location.reload()
    }
    render = (correctAnswer,totalAmount)=>{
      this.scoreElemnt.innerHTML=  `you answered ${correctAnswer} of ${totalAmount} correct`
    }
}
export default Final;