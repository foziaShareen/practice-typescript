import { user as myuser } from './second.js';


 import inquirer from 'inquirer';
 console.log("someOne");
 let user ={
    name:"fozia"
 }
 export default user;

 const userObject = await inquirer.prompt([
    {
        "name":"firstName", 
        "type":"input",
        "message":"Enter your first name \n"
    },
    {
        "name":"email", 
        "type":"input",
        "message":"Enter your  email\n"
      
    },
    
    ])
 console.table(userObject);