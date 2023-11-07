export interface Question {
  question: string;
  answers: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: "在 JavaScript 中，哪個方法用於將 JSON 字符串轉換為 JavaScript 物件？",
    answers: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.fromString()"
    ],
    correct: 0,
  },
  {
    question: "哪個選項是 JavaScript 中的 '立即調用函數表達式' (IIFE)？",
    answers: [
      "function foo() { }();",
      "(function foo() { })();",
      "function() { foo(); }();",
      "function() { }();"
    ],
    correct: 1,
  },
  {
    question: "在 JavaScript 中，'==' 和 '===' 運算子有什麼不同？",
    answers: [
      "'==' 比較值和類型，'===' 只比較值",
      "'==' 只比較值，'===' 比較值和類型",
      "'==' 不進行類型轉換，'===' 會進行類型轉換",
      "沒有不同，它們是相同的"
    ],
    correct: 1,
  },
  {
    question: "哪個是正確的方式來創建一個名為 'myArray' 的空陣列？",
    answers: [
      "var myArray = new Array();",
      "var myArray = [];",
      "var myArray = Array();",
      "以上所有答案"
    ],
    correct: 3,
  }
];

export default questions;
