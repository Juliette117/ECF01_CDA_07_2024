export const questionsQuizz = {
    questions: [
      {
        question: "Quel est l'os le plus long du corps ?",
        choices: [
          "A | Le fémur",
          "B | Le tibia",
          "C | L'humerus",
          "D | Le péroné",
        ],
        
        level: "Niveau 1",
        difficulty: "(Facile : 1 point)",
        type: "QCM",
        correctAnswer: "A | Le fémur",
      },
      {
        question: " Quelle est l'origine du cocktail Mojito ? ",
        choices: [
            "A | Mexique",
            "B | Cuba",
            "C | Argentine",
            "D | Costa Rica"
        ],
        level: "Niveau 1",
        difficulty: "(Facile : 1 point)",
        type: "QCM",
        correctAnswer: "B | Cuba",
      },
      {
        question: " Quel est le nom du groupe de rock formé par Dave Grohl ? ",
        choices: [
            "A | Nirvana",
            "B | Queen Of The Stone Age",
            "C | Tenacious D",
            "D | Foo Fighters"
        ],
        level: "Niveau 2",
        difficulty: "(Moyen : 2 points)",
        type: "QCM",
        correctAnswer: "D | Foo Fighters",
      },
      {
        question: "C ?",
        choices: [
          "a",
          "b",
          "c",
          "d",
        ],
        level: "Niveau 3",
        difficulty: "(Difficile : 5 points)",
        type: "QCM",
        correctAnswer: "a",
      },
    ],
  };
  
  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };
