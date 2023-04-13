// declaracao de variaveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a","b","c","d"];
let points = 0;
let actualQuestion = 0;

// perguntas

let questions = [
    {
        'question' : "A linguagem PHP foi desenvolvida para qual fim?",
        'answers' : [
            {
                "answer": "back end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "sistema operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
            },
        ],
    },
    
    {
        'question' : "Qual é o seletor de id no css?",
        'answers' : [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ],
    },
    {
        'question' : "Uma forma de declarar variaveis em javascript?",
        'answers' : [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ],
    }
];



// substituicao do quizz para a primeira poergunta
function init() {
    // criar a primeira pergunta
    CreateQuestion(0);
}

// cria uma pergunta
function CreateQuestion(i) {
    // limpar a questao anterior
    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn){
        btn.remove();
    });


    // alterar o texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    console.log(questions[i].question);

    questionText.textContent = questions[i].question
    questionNumber.textContent = i + 1;

    // insere as alternativas 

    questions[i].answers.forEach(function(answer, i){

        // cria o template do botao do quizz
        const answerTemplate = document.querySelector("#answer-template").cloneNode(true)

        console.log(answerTemplate);
    })

}

init()
