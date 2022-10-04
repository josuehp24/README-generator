const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown.js');


inquirer.prompt([
    {
    type:'input',
    name:'GitHub',
    message:'What is your GitHub Username?',

},
{
    type:'input',
    name:'email',
    message:'What is your email address?',
},
{
    type:'input',
    name:'project',
    message:"What is your project's name?"
},
{
    type:'input',
    name:'description',
    message:'Write a bref discription of your project',
},
{
    type:'list',
    name:'license',
    message:'What kind of licence should your project have?',
    choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
},
{
    type:'input',
    name:'install',
    message:'What command should be run to install dependencies?',
},
{
    type:'input',
    name:'run',
    message:'What command should be run to run test?',
},
{
    type:'input',
    name:'repo',
    message:'What does the user need to know about using the repo?',
},
{
    type:'input',
    name:'contributors',
    message:'What does the user need to know about contributing to the repo?',
},
]).then((answers) =>{
   // console.log(answers)
    const markdown = generateMarkdown(answers)
    //console.log(markdown);

    fs.writeFile('README.md', markdown , 
    (err) => err ? console.log(err): console.log('file was Created')
     )
})


