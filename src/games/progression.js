import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../utils';

const ruleProgression = 'What number is missing in the progression?';

const createArithmeticProgression = (length = 10) => {
  const firstNum = getRandomInteger();
  const step = getRandomInteger();

  const arithmeticProgression = [firstNum];
  let progressionMember = firstNum;
  for (let i = 1; i < length; i += 1) {
    progressionMember += step;
    arithmeticProgression.push(progressionMember);
  }
  return arithmeticProgression;
};

const createQuestionAnswerPair = () => {
  const progression = createArithmeticProgression();
  const hiddenMemberIndex = getRandomInteger(0, progression.length - 1);
  const correctAnswer = progression[hiddenMemberIndex].toString();
  progression.splice(hiddenMemberIndex, 1, '..');
  const question = `${progression.join(' ')}`;
  return cons(question, correctAnswer);
};

export default () => playGame(ruleProgression, createQuestionAnswerPair);
