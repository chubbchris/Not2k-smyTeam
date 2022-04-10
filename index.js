//const fs = require('fs');
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');


 const promptEmployee = (teamData) => {
 if (!teamData){ teamData = [] }
    
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } else {
                    console.log('Enter your name?')
                    return false

                }
            }
        },

         {
            type:'input',
            name:'employeeID',
            message:'What is your Employee I.D number',
            validate: employeeIdInput =>{
                if(employeeIdInput){
                return true;
                } else {
                    console.log('Enter your employee I.D')
                    return false
                }
            }
         },

         {
        type:'input',
        name:'email',
        message: 'what is your email address? ',
        validate: emailInput => {
            if(emailInput){
                return true;
            }   else { 
                console.log('Enter your email')
                return false;
            }    
         }
         },

         {
             type:'confirm',
             name:'Manager',
             message:'Are you a manager?',
             default: false
         },

         {
            type:'confirm',
            name:'Intern',
            message:'Are you a Intern?',
            default: false
         },

         {
            type:'confirm',
            name:'Engineer',
            message:'Are you a engineer?',
            default: false
         },

         {
             type:'input',
             name: 'github',
             message:'Enter Github name',
             when: ({ Engineer })=> Engineer
         },
         {
             type:'input',
             name:'officeNumber',
             message: 'What is you office number?',
             when:({ Manager })=> Manager

         },
         {
            type:'input',
            name:'school',
            message:'what school did you attend?', 
            when:({ Intern })=> Intern
         },
         {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another team member?',
            default: false
         },
    ])

.then( (data) => {
    teamData.push(data)
    if (data.confirmAddEmployee){
        return promptEmployee(teamData)
    } else {
        return teamData
    }

})

 }

//const pageHTML = generatePage(data);

promptEmployee()
.then( teamData => {

     console.log(teamData);
//fs.writeFile('./index.html', pageHTML, err => {
    //if (err) throw err;
  
   // console.log('Portfolio complete! Check out index.html to see the output!');
});
