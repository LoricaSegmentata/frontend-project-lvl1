import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const ruleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const createQuestionAnswer = () => {
  const question = getRandomInteger();
  const correctAnswer = isEven(question);
  return cons(question, correctAnswer);
};

export default () => playGame(ruleEven, createQuestionAnswer);
