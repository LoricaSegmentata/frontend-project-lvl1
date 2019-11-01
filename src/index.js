import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const greetUser = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};
