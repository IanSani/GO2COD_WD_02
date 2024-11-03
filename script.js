const questionElement=document.getElementsByClassName('question');
const answerElement=document.getElementsByClassName('answers');
const nextButton=document.getElementById("next-btn");

const questions=[
    {
        question:'Which of the following keywords is used to declare a variable in JavaScript?',
        answers:[{
            text:"declare",correct:"false"
        },{
            text:"let",correct="true"
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
    }
]