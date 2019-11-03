import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';

const ruleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const correctAswersToWin = 3;

export const greetUser = () => {
  console.log(`${welcome}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomInteger = (min = 0, max = 100) => (
  Math.floor(min + Math.random() * (max + 1 - min))
);

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const gameEven = () => {
  console.log(`${welcome}\n${ruleEven}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let answerCount = 0; answerCount < correctAswersToWin; answerCount += 1) {
    const question = getRandomInteger();
    const correctAnswer = isEven(question);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
