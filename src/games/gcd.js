import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const ruleGcd = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (!num2 ? num1 : getGcd(num2, num1 % num2));

const createQuestionAnswer = () => {
  const Number1 = getRandomInteger();
  const Number2 = getRandomInteger();
  const question = `${Number1} ${Number2}`;
  const correctAnswer = getGcd(Number1, Number2).toString();
  return cons(question, correctAnswer);
};

export default () => playGame(ruleGcd, createQuestionAnswer);
