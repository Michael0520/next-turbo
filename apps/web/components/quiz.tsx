// src/Quiz.tsx
import React, { useState, useEffect } from "react";
import questions from "@/config/quiz";

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

  const renderQuestion = () => {
    const answerLabels = ["A", "B", "C", "D"];

    return (
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          {questions[currentQuestionIndex].question}
        </h2>
        <div className="flex flex-col justify-center items-center">
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full"
              onClick={() => handleAnswerSelection(index)}
            >
              {answerLabels[index]}. {answer}
            </button>
          ))}
        </div>
        <p className="text-lg mt-4">剩餘時間：{timer} 秒</p>
      </div>
    );
  };

  const renderQuizEnd = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">測驗結束</h2>
      <p className="text-lg mb-2">答對：{correctCount} 題</p>
      <p className="text-lg mb-4">答錯：{incorrectCount} 題</p>
      <button
        onClick={restartQuiz}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        重新測驗
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-4 flex items-center justify-center">
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-4xl overflow-auto">
        {isQuizFinished ? renderQuizEnd() : renderQuestion()}
      </div>
    </div>
  );
};

export default Quiz;
