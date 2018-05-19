"use strict"

function HipsterWords(){
console.log("Controller working");

  const vm = this;
  vm.words = [
    "Jean shorts", 
    "kombucha",
    "DIY", 
    "XOXO", 
    "La croix", 
    "brooklyn", 
    "plaid", 
    "slow-carb", 
    "intelligentsia", 
    "mustache", 
    "helvetica", 
    "irony",
    "chia",
    "beard" ];

  vm.phrases = [
    "You probably haven't heard of them", 
    "food truck culpa pabst", 
    "photo booth green juice franzen ea narwhal",
    "tattooed skateboard iPhone", 
    "single-origin coffee",
    "bicycle rights woke",
    "shabby chic poke", 
    "actually flexitarian gluten-free",
    "literally kitsch",
    "roof party mumblecore " 
  ];
  vm.print = [];

  //add word functions
  vm.addWord = function(){
    //generate random number between 0 and vm.words.length
    let i = Math.floor(Math.random() * vm.words.length);
    console.log(i);  
    const newEl = {
      printedEl: vm.words[i], 
      styled: false
    }
    // take the item with that index in words and push it into vm.phrases
    vm.print.push(newEl);
  }

  vm.addWordStyled = function(){
    //generate random number between 0 and vm.words.length
    let i = Math.floor(Math.random() * vm.words.length);
    console.log(i);  
    const newEl = {
      printedEl: vm.words[i], 
      styled: true
    }
    // take the item with that index in words and push it into vm.phrases
    vm.print.push(newEl);
  }

    //phrases functions
    vm.addPhrase = function(){
      //generate random number between 0 and vm.words.length
      let i = Math.floor(Math.random() * vm.phrases.length);
      console.log(i);  
      const newEl = {
        printedEl: vm.phrases[i], 
        styled: false
      }
      // take the item with that index in words and push it into vm.phrases
      vm.print.push(newEl);
    }
  
    vm.addPhraseStyled = function(){
      //generate random number between 0 and vm.words.length
      let i = Math.floor(Math.random() * vm.phrases.length);
      console.log(i);  
      const newEl = {
        printedEl: vm.phrases[i], 
        styled: true
      }
      // take the item with that index in words and push it into vm.phrases
      vm.print.push(newEl);
    }

    //reset 
    vm.reset = function(){
      vm.print =[];
      console.log(vm.print);
    }

}


angular.module("hipsterWordsModule").controller("HipsterWords", HipsterWords)