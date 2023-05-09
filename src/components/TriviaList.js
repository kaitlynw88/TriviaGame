import axios from "axios"
import { useEffect, useState } from "react"
import Question from "./Question"
import ProgressBar from "./ProgressBar"
import ScoreBoard from "./ScoreBoard"

function TriviaList() {

    const [triviaList, setTriviaList]=useState([])
    const [number, setNumber] = useState(0);
    const [showResults, setShowResults] = useState(false);

    useEffect(()=>{
        
        axios({
            method: "GET",
            url: "https://the-trivia-api.com/api/questions",
            params:{
                difficulty:"easy",
            },
            
        }).then((response) => {
            console.log(response.data);
            setTriviaList(response.data);
        });
    },[])

    
    const advanceQuestion =(()=>{
        console.log("advance")
        setNumber(number + 1)
    })
    console.log(`question number is ${number}`)
    console.log(`THe length of the array is ${triviaList.length}`);


  return (
    <>
        <h2>Trivia List</h2>
        <ProgressBar listLength={triviaList.length} questionNumber = {number + 1}/>
        {
            triviaList.map((question, index)=>{
                const arrayIndex = triviaList.indexOf(question)
                if(arrayIndex === number){
                    return(
                        <div key={index}>
                            <Question indQuestion={question} key={question.id}/>
    
                            <button onClick={advanceQuestion}>Advance</button>
                        </div>
                    )

                }
                
                
            })
        }
    </>
  )
}

export default TriviaList