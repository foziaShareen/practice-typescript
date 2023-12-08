import user from './index.js';
// we have same name of object so use alias , as username so there should not ambiguity
import {user as username } from './second.js'
console.log(`${user.name}`)
export function add(num1:number, num2:number){
    return num1+num2;

}