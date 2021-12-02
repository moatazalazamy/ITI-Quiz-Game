//import data from '../Json/test.json';

//const quiz = require('../Json/test.json')

//import *as data from '../Json/test.json'

var quiz1 = {
    "questions": [
        {
            "question": "What does DNA stand for?",
            "answers": [
                "Dried Nucleic Acid",
        "Decomposed Natural Acid",
     "Deoxyribonucleic Acid"
            ],
            "correctIndex": 2
        },
        {
            "question": "How many bones are in the human body?",
            "answers": [
                "196",
                "200",
                "206 "
            ],
            "correctIndex": 2
        },
        {
            "question": "The concept of gravity was discovered by which famous physicist?",
            "answers": [
                    "William Thomson",
                    "Isaac Newton",
                    "Rudolf Clausius"
            ],
            "correctIndex": 1
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "answers": [
                "Silver",
                "Gold",
                "Diamond"
            ],
            "correctIndex": 2
        },
        {
            "question": "Humans and chimpanzees share roughly how much DNA?",
            "answers": [
                "98.8 %",
                "90.5 %",
                "55.2 %"
            ],
            "correctIndex": 0
        },
        {
            "question": "What is the most abundant gas in the Earth’s atmosphere?",
            "answers": [
                "Oxygen.",
                "Nitrogen.",
                "Argon."
            ],
            "correctIndex": 1
        },
        {
            "question": "Which famous British physicist wrote A Brief History of Time?",
            "answers": [
                "Isaac Newton",
                "Albert Einstein",
                "Stephen Hawking"
            ],
            "correctIndex": 2
        },
        {
            "question": "At what temperature are Celsius and Fahrenheit equal?",
            "answers": [
                 "-50 °",
                 "-40 °",
                 "-10 °"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is the biggest planet in our solar system?",
            "answers": [
                "Jupiter",
                "Mars",
                "Venus"
            ],
            "correctIndex": 0
        },
        {
            "question": "How many teeth does an adult human have?",
            "answers": [
                "30",
                "32",
                "36"
            ],
            "correctIndex": 1
        }
    ]
}
var quiz2 = {
    "questions": [


        {
            "question": "What is the sum of 130+125+191?",
            "answers": [
                "335",
                "456",
                "446"
            ],
            "correctIndex": 2
        },
        {
            "question": "If we minus 712 from 1500, how much do we get?",
            "answers": [
                "758",
                "768",
                 "788"
            ],
            "correctIndex": 2
        },
        {
            "question": "50 times of 8 is equal to:",
            "answers": [
                "80",
                "400",
                "800"
            ],
            "correctIndex": 1
        },
        {
            "question": "110 divided by 10 is:",
            "answers": [
                "None of these",
                "10",
                "11"
            ],
            "correctIndex": 2
        },
        {
            "question": "The product of 82 and 5 is:",
            "answers": [
                "410",
                "420",
                "400"
            ],
            "correctIndex": 0
        },
        {
            "question": "Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
            "answers": [
                "11",
                "12",
                "13"
            ],
            "correctIndex": 1
        },
        {
            "question": "Solve 24÷8+2.",
            "answers": [
                "6",
                "8",
                "5"
            ],
            "correctIndex": 2
        },
        {
            "question": "The product of 121 x 0 x 200 x 25 is: ",
            "answers": [
                "1500",
                "0",
                "4000"
            ],
            "correctIndex": 1
        },
        {
            "question": "The value of pi is equal to:",
            "answers": [
                "3.14",
                "2.25",
                "3.25"
            ],
            "correctIndex": 0
        },
        {
            "question": "Cube root of 1331 is:",
            "answers": [
                "13",
                "11",
                "17"
            ],
            "correctIndex": 1
        }
    ]
}
var quiz3 = {
    "questions": [


        {
            "question": "The thief was sent to ______ prison.",
            "answers": [
                "a",
                "an",
                "the"
            ],
            "correctIndex": 2
        },
        {
            "question": "I don't like coffee.______ do I.",
            "answers": [
                "So",
                "Either",
                "Neither"
            ],
            "correctIndex": 2
        },
        {
            "question": "It ______ my brother.",
            "answers": [
                "is ages that I didn't see",
                "is ages since I saw",
                "was ages since I saw"
            ],
            "correctIndex": 1
        },
        {
            "question": "She ______ me to go to school.",
            "answers": [
                "made",
                "said",
                 "told"
            ],
            "correctIndex": 2
        },
        {
            "question": "How long ______ English?",
            "answers": [
                "have you been learning",
                "do you learn",
                "you learn"
            ],
            "correctIndex": 0
        },
        {
            "question": "The phone ______ Can you answer it, please?",
            "answers": [
                "rings",
                "rang",
                "is ringing"
            ],
            "correctIndex": 2
        },
        {
            "question": "I'd like ______ information, please.",
            "answers": [
                "piece",
                "an",
                "some"
            ],
            "correctIndex": 2
        },
        {
            "question": "If only I ______ richer.",
            "answers": [
                "would be",
                 "were",
                 "am"               
            ],
            "correctIndex": 1
        },
        {
            "question": "You should ______ swimming.",
            "answers": [
                "take up",
                "take off",
                 "start up"
            ],
            "correctIndex": 0
        },
        {
            "question": "Can you tell me when ______ ?",
            "answers": [
                "leaves the train",
                "the train leaves",
                "does leave the train"
            ],
            "correctIndex": 2
        }
    ]
}


var data = [quiz1, quiz2, quiz3]


var quizID = localStorage.getItem("quizID");


function getQuizId(id) {
    quizID = parseInt(id);
    console.log(quizID)
    localStorage.setItem("quizID", quizID);

}



var questionIndex = 0;
var ansList = document.getElementById("answers")
var counter = 0;


/// function to read the question and call loading answers function 
// questionIndes is the index of the searched question 

function loadQestion(questionIndex) {

    document.getElementById("question").innerHTML = data[quizID].questions[questionIndex].question
    loadAnswers(questionIndex);


}
///////////////////////////////////////////////////////////////
// load answers 
function loadAnswers(questionIndex) {
    const answers = data[quizID].questions[questionIndex].answers
    console.log(answers);
    for (var i = 0; i < answers.length; i++) {
        // ansList.innerHTML += " <label for='" + i + "'>" + answers[i] + "</label> <input type='radio' name='answer' id='" + i + "'  value='" + answers[i] + "' onclick='checkAnswer(this.id)' > <br>"
        ansList.innerHTML += "<input type='radio' name='answer' id='" + i + "'  value='" + answers[i] + "' onclick='checkAnswer(this.id)'  >  <label for='" + i + "'>" + answers[i] + "</label>  <br> "

    }

}
////////////////////////////////////////////////////////////

// generate question dependeing on question index and increasing it 

function generateQest(questionIndex = this.questionIndex) {
    console.log(quizID)

    //checkTheme();


    if (this.questionIndex < data[quizID].questions.length) {
        ansList.innerHTML = "";
        loadQestion(questionIndex);

        this.questionIndex++;

    }


    else {
        console.log("5las")
    }
}

var flag;

// this function made to check the answer and if its correct it will raise a flag 
function checkAnswer(idChecked) {
    console.log("this id " + idChecked)
    console.log("this correct " + data[quizID].questions[this.questionIndex - 1].correctIndex)



    if (idChecked == data[quizID].questions[this.questionIndex - 1].correctIndex) {

        flag = true
        console.log(flag)
    }

    else {

        flag = false
        console.log(flag)
    }




}


// flag variable to check if the user check an answer or not 
function nextGenerateQest(questionIndex = this.questionIndex) {
    var checkedFlag = false;
    var radios = document.querySelectorAll('input[name="answer"]'); // get all radio buttons 

    // flag and if condition to check if the answer is correct it will raise the result counter 
    if (flag) {
        counter++
        console.log("this counter " + counter)
    }

    // looping over the radio buttons to check if there is an answer or not 
    for (var rad of radios) {
        if (rad.checked) {
            checkedFlag = true
            console.log("true flag")


        }
        else {

            console.log("false flag")
        }
    }



    //loading a questions after checking if the index of the current is lower than the lentgh of the array and the checking flag is true 
    // and increase question index 
    if (this.questionIndex < data[quizID].questions.length && checkedFlag === true) {
        ansList.innerHTML = "";
        loadQestion(questionIndex);
        this.questionIndex++;

    }

    // if the question index is bigger than the length the score will be showed


    else if (this.questionIndex >= data[quizID].questions.length) {
        ansList.innerHTML = " "
        document.getElementById("question").innerHTML = "your score is: " + counter + "/" + data[quizID].questions.length

    }
    else if (checkedFlag === false) {
        var labels = document.querySelectorAll('label');
        for (var i of labels) {
            i.style.color = "red"

        }
        alert("Choose anwser!")
    }


    checkedFlag = false;
}





// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#darkBtn');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark-mode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark-mode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});











/*var element = document.body;





var checkFlag = localStorage.getItem("themeFlag");
function setTheme(id) {

    
    checkFlag = localStorage.getItem("themeFlag");
    console.log(checkFlag)
   

    if (id == 0 && (checkFlag=="false"||checkFlag==null)) {
        
        element.classList.toggle("dark-mode");
        localStorage.setItem("themeFlag", true);
        localStorage.setItem("theme", "dark-mode");
        
    }


    else if (id == 1 && (checkFlag=="false"||checkFlag==null) ) {
        
        element.classList.toggle("blue-mode");
        localStorage.setItem("themeFLag", true);
        localStorage.setItem("theme", "blue-mode");
        

       

    }
    
    else if(id == 0 && checkFlag=="true"  ) {
        
        localStorage.setItem("themeFLag", false);
        checkFlag = localStorage.getItem("themeFlag")
        element.classList.toggle("dark-mode");
        //localStorage.removeItem("theme")
       


    }
    
    else if(id == 1 && checkFlag=="true" ) {
    
        localStorage.setItem("themeFLag", false);
        checkFlag = localStorage.getItem("themeFlag")
        element.classList.toggle("blue-mode");
        //localStorage.removeItem("theme")
        

    }


}


function checkTheme() {

    var theme = localStorage.getItem("theme");
    
    checkFlag = localStorage.getItem("themeFlag");
    console.log("checking from check theme" )
    if (theme == "dark-mode" && checkFlag=="true") {
        checkFlag = localStorage.getItem("themeFlag");
        element.classList.toggle("dark-mode");

    }
    else if (theme == "blue-mode"  && checkFlag=="true") {
        checkFlag = localStorage.getItem("themeFlag");
       
        element.classList.toggle("blue-mode");
    }
    

}
*/