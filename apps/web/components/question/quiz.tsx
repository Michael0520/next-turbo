"use client";
import React, { useState, useEffect } from "react";
import questions from "@/config/quiz";
import QuestionDisplay from "./question-display";
import QuizEndDisplay from "./quiz-end-display";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(10);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  useEffect(() => {
    if (timer === 0) moveToNextQuestion();
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerSelection = (selectedAnswerIndex: number) => {
    const isCorrect =
      questions[currentQuestionIndex].correct === selectedAnswerIndex;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
    setTimer(10);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIsQuizFinished(false);
    setTimer(10);
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-4xl overflow-auto">
        {isQuizFinished ? (
          <QuizEndDisplay
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            restartQuiz={restartQuiz}
          />
        ) : (
          <QuestionDisplay
            question={questions[currentQuestionIndex].question}
            answers={questions[currentQuestionIndex].answers}
            timer={timer}
            handleAnswerSelection={handleAnswerSelection}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
