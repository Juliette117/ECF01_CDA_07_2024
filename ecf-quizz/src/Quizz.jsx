import { useState, useEffect } from "react";
import { questionsQuizz, resultInitalState } from "./questions";


const Quizz = ({ questions }) => {



    const API_URL = './questions.json';
    const [questionsAPI, setQuestionsAPI] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIndex, setAnswerIndex] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitalState);
    const [showResult, setShowResult] = useState(false);
    const { question, choices, correctAnswer, difficulty, level } = questions[currentQuestion];
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
        if (difficulty === "(Difficile : 5 points)") {
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


        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((previous) => previous + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

    }

    const onTryAgain = () => {
        setResult(resultInitalState);
        setShowResult(false);
    };

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setQuestionsAPI(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <>


            <h1>Quiz Aventure</h1>
            <div className="container">
                {!showResult ? (<>
                    <span className="description">
                        {currentQuestion === questions.length - 4 ? " Bienvenue sur le jeu de quizz de Quiz Aventure !" : null}
                    </span>
                    <span className="active-question-number">
                        {currentQuestion + 1}
                    </span>
                    <span className="total-question-number">
                        /{questions.length}
                    </span>
                    <div className="level">
                        {level}
                    </div>
                    <span className="difficulty">{difficulty}</span>
                    <h2>{question}</h2>
                    {/* <div>
                        <ul>
                            {questionsAPI.map((answer, index) => (
                                <li onClick={() => onAnswerClick(answer, index)}
                                key={answer} className={answerIndex === index ? "selected-answer" : null}
                                >
                                    {answer.id} | {answer.answers}
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <ul>
                        {

                            choices.map((answer, index) => (
                                <li
                                    onClick={() => onAnswerClick(answer, index)}
                                    key={answer} className={answerIndex === index ? "selected-answer" : null}
                                >
                                    {answer}

                                </li>
                            ))
                        }
                    </ul>

                    <div className="bottom">
                        <span className="nextLevel">
                            {currentQuestion === questions.length - 3 ? "Passer au niveau suivant !" : null}
                            {currentQuestion === questions.length - 2 ? "Passer au niveau suivant !" : null}
                            {currentQuestion === questions.length - 1 ? "Dernière question !" : null}
                        </span>
                        <button onClick={onClickNext} disabled={answerIndex === null}>
                            {currentQuestion === questions.length - 1 ? "Quizz terminé" : "Suivant"}
                        </button>

                    </div>
                </>) : (
                    <div className="result">
                        <h3>Résultats</h3>
                        <p>
                            Nombre de questions: <span>{questions.length}</span>
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
                       

                        {result.score == 9 ? <p className="fullScore">Tout juste, félicitations !</p> : <p className="missScore">Vous pouvez rejouer pour tenter d'améliorer votres score</p>}

                        <button onClick={onTryAgain}>Réessayer</button>
                    </div>
                )}



            </div>
        </>

    );

}

export default Quizz;