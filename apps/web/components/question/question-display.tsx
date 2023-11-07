import React from "react";

interface QuestionDisplayProps {
  question: string;
  answers: string[];
  timer: number;
  handleAnswerSelection: (index: number) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  answers,
  timer,
  handleAnswerSelection,
}) => {
  const answerLabels = ["A", "B", "C", "D"];

  const timerStyle = `text-lg mb-4 font-bold ${
    timer <= 5 ? "text-red-600" : "text-green-600"
  }`;

  return (
    <div className="text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{question}</h2>
      <p className={timerStyle}>剩餘時間：{timer} 秒</p>
      <div className="flex flex-col justify-center items-center">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full"
            onClick={() => handleAnswerSelection(index)}
          >
            {answerLabels[index]}. {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;
