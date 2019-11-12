import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const correctAswersToWin = 3;

export default (rule, questionAnswer) => {
  console.log(`Welcome to the Brain Games!\n${rule}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let answerCount = 0; answerCount < correctAswersToWin; answerCount += 1) {
    const questionAnswerPair = questionAnswer();
    const question = car(questionAnswerPair);
    const correctAnswer = cdr(questionAnswerPair);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
