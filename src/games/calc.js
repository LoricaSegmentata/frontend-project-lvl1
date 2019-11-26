import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const ruleCalc = 'What is the result of the expression?';

const mathOperators = '+-*';

const getRandomOperator = (operators) => {
  const index = getRandomInteger(0, mathOperators.length - 1);
  return operators[index];
};

const calcExpression = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      return null;
  }
  return result;
};

const createQuestionAnswer = () => {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const mathOperator = getRandomOperator(mathOperators);
  const question = `${n1} ${mathOperator} ${n2}`;
  const correctAnswer = calcExpression(n1, n2, mathOperator).toString();
  return cons(question, correctAnswer);
};

export default () => playGame(ruleCalc, createQuestionAnswer);
