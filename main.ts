#!/usr/bin/env node

import inquirer from "inquirer"

let answer:{Sentence:string}=await inquirer.prompt({
name:"Sentence",
message:"Enter your sentence: ",
type:"input"

});

let words=answer.Sentence.trim().split(" ");
console.log(`Words in your sentence is ${words.length}`);