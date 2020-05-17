// Program prompts the user with a series of questions and constructs a readme.md file from it.

 
 
 const inquier = require('inquirer');
 const fs = require('fs');
 const generateMarkdown = require('./utils/generateMarkdown.js');


//Function to prompt user; returns answer object.
 const  promptUser = function() {
   console.log('--------------------');
   console.log('|     WARNING!     |');
   console.log('| This program over|');
   console.log('|-writes the readme|');
   console.log('|.md file in this  |');
   console.log('|directory.  Ctrl- |');
   console.log('|C to escape if you|');
   console.log('|wish to preserve. |');
   console.log('--------------------');
   var data = inquier.prompt([
    { 
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?' 
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project?'
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage directions.'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select the licensing for the project.',
        choices: ['cco', 'MIT', 'GPL', 'Apache', 'MPL', 'AGPL']
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How to contibute.'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter how to test your project.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GITHUB name?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      }

 ])
 return(data);
}

//Launchs program, creates promis, process object, prints to file.
promptUser().then(function(data){
   let thestring = generateMarkdown(data)
   //console.log(output);
   fs.writeFile('readme.md',thestring, err =>{if (err) throw err;}) 
  console.log('--------------------');
  console.log('| Readme.md created!|');
  console.log('--------------------');
})
.catch(function(err){console.log(err)});


