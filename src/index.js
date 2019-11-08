import readlineSync from 'readline-sync';

export default (rule) => {
  console.log(`Welcome to the Brain Games!\n${rule}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
