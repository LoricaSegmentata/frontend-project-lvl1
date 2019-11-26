import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const ruleGcd = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const createQuestionAnswer = () => {
  const n1 = getRandomInteger();
  const n2 = getRandomInteger();
  const question = `${n1} ${n2}`;
  const correctAnswer = getGcd(n1, n2).toString();
  return cons(question, correctAnswer);
};

export default () => playGame(ruleGcd, createQuestionAnswer);
