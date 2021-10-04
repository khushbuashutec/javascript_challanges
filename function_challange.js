'use strict'


const poll = {
    question: 'what is your favorite programming language?',
    options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
    answer: new Array(4).fill(0),
    registerNewAnswer: function () {
        const number = prompt(`${this.question.toString()}
         ${promptData(this.options)}`)
        console.log(number);
    }
};
//poll.registerNewAnswer();
console.log(promptData(poll.options));