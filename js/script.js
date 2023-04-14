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
    },

    {
        'question' : "Qual dessas linguagens é mais usada em inteligencias artíficiais?",
        'answers' : [
            {
                "answer": "HTML",
                "correct": false
            },
            {
                "answer": "C#",
                "correct": false
            },
            {
                "answer": "Pyton",
                "correct": true
            },
            {
                "answer": "Java",
                "correct": false
            },
        ],
    },

    {
        'question' : "Qual dessas Frameworks NÃO usa nada de Javascript em sua composição?",
        'answers' : [
            {
                "answer": "Bootstrap",
                "correct": false
            },
            {
                "answer": "Vue",
                "correct": false
            },
            {
                "answer": "Jquery",
                "correct": false
            },
            {
                "answer": "Laravel",
                "correct": true
            },
        ],
    },

    {
        'question' : "Qual desses comandos NÃO é um comando sql?",
        'answers' : [
            {
                "answer": "where",
                "correct": false
            },
            {
                "answer": "const",
                "correct": true
            },
            {
                "answer": "if",
                "correct": false
            },
            {
                "answer": "order by",
                "correct": false
            },
        ],
    },

    {
        'question' : "Qual dessas linguagens é uma linguagem compilada?",
        'answers' : [
            {
                "answer": "Java",
                "correct": true
            },
            {
                "answer": "Javascript",
                "correct": false
            },
            {
                "answer": "C#",
                "correct": false
            },
            {
                "answer": "PHP",
                "correct": false
            },
        ],
    },

    {
        'question' : "O WordPress é um sistema baseado em qual linguagem?",
        'answers' : [
            {
                "answer": "C++",
                "correct": false
            },
            {
                "answer": "Pyton",
                "correct": false
            },
            {
                "answer": "Java",
                "correct": false
            },
            {
                "answer": "PHP",
                "correct": true
            },
        ],
    },

    {
        'question' : "Qual desses conjuntos de caracteres não podem aparecer em uma URL?",
        'answers' : [
            {
                "answer": "'https://'",
                "correct": false
            },
            {
                "answer": "'?'",
                "correct": false
            },
            {
                "answer": "'>'",
                "correct": true
            },
            {
                "answer": "'www.'",
                "correct": false
            },
        ],
    },

    {
        'question' : "UI e UX design são usados nessas áreas EXETO?",
        'answers' : [
            {
                "answer": "Desktop",
                "correct": false
            },
            {
                "answer": "mobile",
                "correct": false
            },
            {
                "answer": "back end",
                "correct": true
            },
            {
                "answer": "front end",
                "correct": false
            },
        ],
    },

    {
        'question' : "O comando git push serve?",
        'answers' : [
            {
                "answer": "receber alterações",
                "correct": false
            },
            {
                "answer": "iniciar o repositório",
                "correct": false
            },
            {
                "answer": "enviar alterações",
                "correct": true
            },
            {
                "answer": "mudar de branch",
                "correct": false
            },
        ],
    },
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
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true)

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer["answer"];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        // remover hide e template class
        answerTemplate.classList.remove("hide")
        answerTemplate.classList.remove("answer-template")

        console.log(answerTemplate);

        answersBox.appendChild(answerTemplate);

        // adiciona o evento de click ao botao
        answerTemplate.addEventListener("click",function(){
            checkAnswer(this)
        })

        
    })

    // incrementar o numero da questao
    actualQuestion++;

}

// verificando resposta do usuario
function checkAnswer(btn){

    // selecionar todos os botoes
    const buttons = answersBox.querySelectorAll("button")

    //verifica se a resposta esta correta e adiciona classes nos botoes
    buttons.forEach(function(button){

        if(button.getAttribute("correct-answer") === 'true'){
            button.classList.add("correct-answer");
            // checa se o usuario acertou
            if(btn === button){
                // incrementa os pontos 
                points++;
            }
        }else{
            button.classList.add("wrong-answer");

        }

    })
    console.log(points);
    // exibir proxima pergunta
    nextQuestion();
}

function nextQuestion() {
    
    // timer para usuario ver as respostas
    setTimeout(function(){

        // verifica se ainda há perguntas
        if(actualQuestion >= questions.length){
            // apresenta a mensagem de sucesso
            showSuccessMessage()
            return;
        }

        CreateQuestion(actualQuestion);

    },700)

}

// exibe a tela final
function showSuccessMessage(){

    hide()

    // trocar dados da tela de sucesso
    const score = ((points/ questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector("#display-score span");
    displayScore.textContent = score.toString()

    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;

    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = questions.length

}

function hide() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

// reiniciar quizz
const restart = document.querySelector("#restart")
restart.addEventListener("click",function(){

    // zera o jogo
    actualQuestion = 0;
    points = 0;
    hide();
    init();

})

init()
