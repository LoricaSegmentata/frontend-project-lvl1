import readlineSync from 'readline-sync';
import getRandomInteger from '../utils';
import welcome from '..';

const correctAswersToWin = 3;
const ruleCalc = 'What is the result of the expression?';

const mathOperators = '+-*';

const getRandomOperator = (str) => {
  const index = getRandomInteger(0, mathOperators.length - 1);
  return str[index];
};

const calcExpression = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return NaN;
  }
  return result;
};

export default () => {
  const userName = welcome(ruleCalc);

  for (let answerCount = 0; answerCount < correctAswersToWin; answerCount += 1) {
    const Number1 = getRandomInteger();
    const Number2 = getRandomInteger();
    const mathOperator = getRandomOperator(mathOperators);
    const question = `${Number1} ${mathOperator} ${Number2}`;
    const correctAnswer = calcExpression(Number1, Number2, mathOperator);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
