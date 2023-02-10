let userName ='';

userName = 'Jane' ? 
  console.log('Hello, Jane!'):
  console.log('Hello!');

let userQuestion = 'will I pass my exams?';
  console.log(' Is your question is ' +   userQuestion);

const randomNumber = Math.floor(Math.random() * 8);
console.log(' The number is ' + randomNumber);

let eightBall = '' + randomNumber;

switch (eightBall) {
  case '0':
  console.log("Do not think about it");
  break;
  case '1':
  console.log("It is certain");
  break;
  case '2':
  console.log("It is decidedly so");
  break;
  case '3':
  console.log("Reply hazy try again");
  break;
  case '4':
  console.log("Cannot predict now");
  break;
  case '5':
  console.log("Do not count on it");
  break;
  case '6':
  console.log("My sources say no");
  break;
  case '7':
  console.log("Outlook not so good");
  break;
  case '8':
  console.log("Signs point to yes");
  break;
}


