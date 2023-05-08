function Question(props) {

    
console.log(props.indQuestion)
console.log(props.indQuestion.correctAnswer)

const answerArray = []

props.indQuestion.incorrectAnswers.map((indAnswer)=>{
    answerArray.push(indAnswer)
})
answerArray.push(props.indQuestion.correctAnswer);
console.log(answerArray)
const shuffleArray=((answerArray)=>{
    answerArray.sort(()=>
    Math.random() - 0.5)
})
shuffleArray(answerArray)
console.log(answerArray)
  return (
    <>
    
        <div>
            <h2>{props.indQuestion.question}</h2>

            <select name="" id="">
                {
                    answerArray.map((answer)=>{
                        return(
                            <option value="">{answer}</option>
                        )
                    })
                }
            </select>
        </div>
        
    
    </>
  )
}

export default Question