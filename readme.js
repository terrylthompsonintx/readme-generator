// require fs and inquier
// get inquirer working.  Prompt for 
/*
title
description, 
instalation instructions, 
usage information, 
License,
contributing, 
tests, 
Quetions.
email 
 */

 const inquier = require('inquirer');
 const fs = require('fs');
 //const generateMarkdown = require('./utils/generateMarkdown.js');
//var generateMarkdown  = function(){


 const  promptUser = function() {
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
        type: 'checkbox',
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
        name: 'question',
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

promptUser().then(function(data){
const {title,description, install,usage,license,contribute,test,question,email}=data;
return`
 # ${title}
`
}).then(function(thestring){
  fs.writeFile('readme.md',thestring, err =>{if (err) throw err;}) 
})
.catch();

