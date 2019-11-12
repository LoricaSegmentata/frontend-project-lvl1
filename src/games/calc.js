import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

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

const createQuestionAnswerPair = () => {
  const Number1 = getRandomInteger();
  const Number2 = getRandomInteger();
  const mathOperator = getRandomOperator(mathOperators);
  const question = `${Number1} ${mathOperator} ${Number2}`;
  const correctAnswer = calcExpression(Number1, Number2, mathOperator).toString();
  return cons(question, correctAnswer);
};

export default () => playGame(ruleCalc, createQuestionAnswerPair);
