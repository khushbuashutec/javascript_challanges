'use strict'


//challange

const poll = {
    question: 'what is your favorite programming language?',
    options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(Write Option Number)`));

        typeof answer === 'number' && answer <= this.answers.length && this.answers[answer]++;
        console.log(this.answers);
        this.displayResults();
        this.displayResults('string');

    },
    displayResults(type = 'array') {
        if (typeof type === 'array') {
            console.log(this.answers);
        }
        else {
            (typeof type === 'string')
            console.log(`poll results are ${this.answers.join(', ')}`);
        }
    },


};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
poll.displayResults.call({ answers: [3, 4, 5] }, 'string');

//challange 2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();