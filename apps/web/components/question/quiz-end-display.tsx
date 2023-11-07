import React from "react";

interface QuizEndDisplayProps {
  correctCount: number;
  incorrectCount: number;
  restartQuiz: () => void;
}

const QuizEndDisplay: React.FC<QuizEndDisplayProps> = ({
  correctCount,
  incorrectCount,
  restartQuiz,
}) => {
  return (
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
};

export default QuizEndDisplay;
