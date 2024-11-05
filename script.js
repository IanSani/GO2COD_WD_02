const questionElement=document.getElementsByClassName('question');
const answerElement=document.getElementsByClassName('answers');
const nextButton=document.getElementById("next-btn");

const questions=[
    {
        question:'Which of the following keywords is used to declare a variable in JavaScript?',
        answers:[{
            text:"declare",correct:"false"
        },{
            text:"let",correct:"true"
        },{
            text:"def",correct:"false"
        },
        {
            text:"variate",correct:"false"
        }
        ]
    },{
        question:"What will console.log(1 + '1'); output?",
        answers:[
            {
                text:"11",correct:"true"
            },{
                text:"2",correct:"false"
            },{
                text:"1 1",correct:"false"
            },{
                text:"undefined",correct:"false"
            }
        ]
    },{
        question:"What does NaN represent in JavaScript?",
        answers:[
            {text:"not a name",correct:"false"},{
                text:"not a number",correct:"true"
            },{
                text:"Null and Nullified",correct:"false"
            },{
                text:"Not an object",correct:"false"
            }
        ]
    },{
        question:'Which of the following symbols is used for strict equality comparison in JavaScript?',
        answers:[
            {
                text:"==",correct:"false"
            },{
                text:"=",correct:"false"
            },{
                text:"===",correct:"true"
            },{
                text:">=",correct:"false"
            }
        ]
    },{
        question:" What will typeof null return in JavaScript?",
        answers:[
            {text:"undefined",correct:"false"},
            {text:"null",correct:"false"},
            {text:"object",correct:"true"},
            {text:"boolean",correct:"false"}
        ]
    }
]

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    let score=0;
    let currentQuestionIndex=0;
    nextButton.innerHTML="Next";
    showQuestion()
}

function showQuestion(){
let currentQuestion=questions[currentQuestionIndex];
let questionNo=currentQuestionIndex + 1;
questionElement.innerHTML=questionNo+ ". " + currentQuestion.question;
questions.answers.forEach(answer=> {
    const button=document.createElement('button');
    button.classList.add('btn');
    button.innerText=answer.text;
    
    
});

}