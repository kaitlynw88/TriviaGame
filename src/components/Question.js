import { useState } from "react";

function Question(props) {
const [userAnswer, setUserAnswer] = useState("")
const [CorrectAnswer, setCorrectAnswer] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [score, setScore] = useState(0);



const answerArray = []

props.indQuestion.incorrectAnswers.map((indAnswer)=>{
    return(
        answerArray.push(indAnswer)
    )
})
answerArray.push(props.indQuestion.correctAnswer);
const shuffleArray=((answerArray)=>{
    return(
        answerArray.sort(()=>
        Math.random() - 0.5)
    )
})
shuffleArray(answerArray)

const handleChange =((e)=>{
    console.log("you changed an answer")
    console.log(e.target.value)
    setUserAnswer(e.target.value)

})

const checkAnswer = ((e)=>{
    e.preventDefault()
    if(userAnswer === props.indQuestion.correctAnswer){
        setCorrectAnswer(true)
        setScore(score + 10)
    }
    setSubmitted(true)
})




return (
    <>
        <p>{score}</p>
          {submitted ? (
              <>
                  {CorrectAnswer ? (
                      <>
                          <h2>Correct!</h2>
                      </>
                  ) : (
                      <>
                        <h2>Wrong!</h2>
                      </>
                  )}
              </>
          ) : (
              <div>
                  <h2>{props.indQuestion.question}</h2>

                  <select onChange={handleChange}>
                      {answerArray.map((answer, index) => {
                        console.log(index)
                          return (
                              <option key={index} value={answer}>{answer}</option>

                          )
                        })}
                  </select>
                  <button onClick={checkAnswer}>Submit Answer</button>
              </div>
          )}
      </>
  );
}

export default Question