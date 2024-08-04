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
        question: " Combien de pattes les fourmis possèdent t-elles ? ",
        choices: [
            "A | 4",
            "B | 6",
            "C | 10",
            "D | 12"
        ],
        level: "Niveau 1",
        difficulty: "(Facile : 1 point)",
        type: "QCM",
        correctAnswer: "B | 6",
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
        question: "Quelle rivière traverse la ville de Bruxelles ?",
        choices: [
          "A | La Meuse",
          "B | La Senne",
          "C | L'Escaut",
          "D | L'Ourthe",
        ],
        level: "Niveau 3",
        difficulty: "(Difficile : 5 points)",
        type: "QCM",
        correctAnswer: "B | La Senne",
      },
    ],
  };
  
  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };
