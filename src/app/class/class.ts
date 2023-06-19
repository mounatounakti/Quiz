export interface Quiz {
    idQuiz: number;
    nameQ: string;
    difficulty: string;
    coin_cost: number;
    created_at: string;
    creator: {
      nameC: string;
      firstNameC: string;
      emailC: string;
      iconP: string;
    };
}
export interface Answer {
  answerId: number;
  answerText: string;
  isCorrect: boolean;
}
export interface Question {
  questionId: number;
  questionText: string;
  quizId: number;
  quizName: string;
  creatorId: number;
  creatorName: string;
  creatorFirstName: string;
  answers: Answer[];
}



