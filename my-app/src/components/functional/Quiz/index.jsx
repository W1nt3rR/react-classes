import style from "./quiz.module.css";
import questions from "./questions.json"
import { useState } from "react";

function Quiz(props)
{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    const [end, setEnd] = useState(false);

    const answers = questions[currentQuestion].answers;
    
    const answersButtons = answers.map((answer, index) => {
        return <button value={index} onClick={checkQuestion} className={style.btn}>{answer.answer}</button>
    });
    
    function checkQuestion(e)
    {
        const num = e.target.value;
        if(answers[num].isTrue)
            setPoints(points + 1);

        handleNextQuestion();
    }

    function handleNextQuestion()
    {
        if(currentQuestion < questions.length - 1)
            setCurrentQuestion(currentQuestion + 1);
        else
            setEnd(true);
    }

    function handleReset()
    {
        setCurrentQuestion(0);
        setPoints(0);
        setEnd(false);
    }

    const endScreen = (
        <div id={style.quiz}>
            <h1>You scored: {points} points</h1>
            <div id={style.reset}>
                <button className={style.btn} onClick={handleReset}>Reset</button>
            </div>
        </div>
    );

    const questionScreen = (
        <div id={style.quiz}>
            <h3>{currentQuestion + 1}/{questions.length}</h3>
            <h1>{questions[currentQuestion].question}</h1>

            <div className={style.filler}></div>
            
            <div id={style.answers}>
                {answersButtons}
            </div>
            
            <div id={style.next}>
                <button className={style.btn} onClick={handleNextQuestion}>Next</button>
            </div>
        </div>
    );

    return (
        <div id={style.container}>
            { end ? endScreen : questionScreen }
        </div>
    );
}

export default Quiz