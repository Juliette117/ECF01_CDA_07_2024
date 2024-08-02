import { useState } from "react";
import { questionsQuizz } from "./questions";

const Quizz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex ] = useState(null);
    const [answer, setAnswer ] = useState(null);
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

    }

    return (
        <>
            <h1>Quiz Aventure</h1>
            <div class="container">
                <>
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
                            {currentQuestion === questions.length -1 ? "Quizz terminé" : "Suivant"}
                        </button>

                    </div>
                </>

            </div>
        </>

    );

}

export default Quizz;