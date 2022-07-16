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

    if(end)
        return (
            <div id={style.container}>
                <div id={style.quiz}>
    
                    <h1>You scored: {points} points</h1>

                    <div id={style.reset}>
                        <button className={style.btn} onClick={handleReset}>Reset</button>
                    </div>
                    
                </div>
            </div>
        );

    return (
        <div id={style.container}>
            <div id={style.quiz}>
                <h3>{currentQuestion + 1}/{questions.length}</h3>
                <h1>{questions[currentQuestion].question}</h1>

                <div className={style.filler}></div>
                
                <div id={style.answers}>
                    {/* <button value={0} onClick={checkQuestion} className={style.btn}>{questions[currentQuestion].answers[0].answer}</button>
                    <button value={1} onClick={checkQuestion} className={style.btn}>{questions[currentQuestion].answers[1].answer}</button>
                    <button value={2} onClick={checkQuestion} className={style.btn}>{questions[currentQuestion].answers[2].answer}</button>
                    <button value={3} onClick={checkQuestion} className={style.btn}>{questions[currentQuestion].answers[3].answer}</button> */}
                    {answersButtons}
                </div>
                
                <div id={style.next}>
                    <button className={style.btn} onClick={handleNextQuestion}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Quiz