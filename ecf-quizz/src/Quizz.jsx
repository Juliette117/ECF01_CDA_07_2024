import { useState } from "react";
import { questionsQuizz, resultInitalState } from "./questions";

const Quizz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitalState);
    const [ showResult, setShowResult] = useState(false);
    const { question, choices, correctAnswer, difficulty } = questions[currentQuestion];
    const onAnswerClick = (answer, index) => {
        setAnswerIndex(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);

        }
    };

    const onClickNext = () => {
        setAnswerIndex(null);
        if(difficulty === "(Difficile : 5 points)") {
            setResult(
                (previous) =>
                answer ? {
                    ...previous, score: previous.score + 5, correctAnswers: previous.correctAnswers + 1
                } : {
                    ...previous, wrongAnswers: previous.wrongAnswers + 1,
                }
            );

        } else if (difficulty === "(Moyen : 2 points)") {
            setResult(
                (previous) =>
                answer ? {
                    ...previous, score: previous.score + 2, correctAnswers: previous.correctAnswers + 1
                } : {
                    ...previous, wrongAnswers: previous.wrongAnswers + 1,
                }
            );

            
        } else {
            setResult(
                (previous) =>
                answer ? {
                    ...previous, score: previous.score + 1, correctAnswers: previous.correctAnswers + 1
                } : {
                    ...previous, wrongAnswers: previous.wrongAnswers + 1,
                }
            );

        }
        

        if (currentQuestion !== questions.length -1) {
            setCurrentQuestion((previous) => previous +1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

    }

    const onTryAgain = () => {
        setResult(resultInitalState);
        setShowResult(false);
      };

    return (
        <>
            <h1>Quiz Aventure</h1>
            <div class="container">
                {!showResult ? (  <>
                    <span class="active-question-number">
                        {currentQuestion + 1}
                    </span>
                    <span class="total-question-number">
                        /{questions.length}
                    </span>
                    <h2>{question}</h2>
                    <ul>
                        {
                            choices.map((answer, index) => (
                                <li
                                    onClick={() => onAnswerClick(answer, index)}
                                    key={answer} class={answerIndex === index ? "selected-answer" : null}
                                >
                                    {answer}

                                </li>
                            ))
                        }
                    </ul>
                    <span>{difficulty}</span>
                    <div class="bottom">
                        <button onClick={onClickNext} disabled={answerIndex === null}>
                            {currentQuestion === questions.length - 1 ? "Quizz terminé" : "Suivant"}
                        </button>

                    </div>
                </>) : (
                 <div class="result">
                 <h3>Résultats</h3>
                 <p>
                    Questions répondues: <span>{questions.length}</span>
                 </p>
                 <p>
                   Score total: <span>{result.score}</span>
                 </p>
                 <p>
                   Réponses correctes: <span>{result.correctAnswers}</span>
                 </p>
                 <p>
                   Réponses fausses: <span>{result.wrongAnswers}</span>
                 </p>
                 <button onClick={onTryAgain}>Réessayer</button>
               </div> 
                )}
                
              

            </div>
        </>

    );

}

export default Quizz;