"use client";
import Quiz from "@/components/question/quiz";

export default function Page() {
  return (
    <div className="container flex flex-col items-center justify-center font-bold text-white p-20">
      <header>
        <h1 className="text-center text-2xl">Quiz App</h1>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}
