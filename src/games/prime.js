import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const rulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const createQuestionAnswer = () => {
  const question = getRandomInteger();
  const correctAnswer = isPrime(question);
  return cons(question, correctAnswer);
};

export default () => playGame(rulePrime, createQuestionAnswer);
