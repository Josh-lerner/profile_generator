const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name ', (answer1) => {
  console.log(`Thank you ${answer1}`);


  rl.question('What is your favourite music to listen to while coding ', (answer2) => {
    console.log(`Thank you ${answer1} your favourite music is ${answer2}`);

    rl.question('What is your favourite thing for brunch ', (answer3) => {
      console.log(`Thank you ${answer1} your favourite thing for brunch is ${answer3}`);

      rl.question('What is your favourite sport ', (answer4) => {
        console.log(`Thank you ${answer1} your favourite sport is ${answer4}`);

        rl.question('Tell us a skill', (answer5) => {
          console.log(`${answer1} you're a weirdo but you're good at ${answer5}`);

          rl.close();

          console.log(`${answer1} loves listening to ${answer2} while coding, devouring ${answer3} for brunch, prefers ${answer4} over any other sport, and is amazing at ${answer5}.`)
        });
      });
    });
  });
});

