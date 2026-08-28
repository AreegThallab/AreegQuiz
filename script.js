const questions = [
    {
        topic: "Day 1 • Networking",
        q: "What is the main role of DNS?",
        options: [
            "To style web pages",
            "To convert domain names into IP addresses",
            "To create HTTP status codes",
            "To store files on the browser"
        ],
        answer: 1,
        explanation: "DNS translates readable domain names such as google.com into IP addresses."
    },
    {
        topic: "Day 1 • Networking",
        q: "What does ISP stand for?",
        options: [
            "Internet Service Provider",
            "Internal Server Protocol",
            "Internet Security Port",
            "International System Provider"
        ],
        answer: 0,
        explanation: "ISP stands for Internet Service Provider, the company that provides your Internet connection."
    },
    {
        topic: "Day 1 • Networking",
        q: "Which command can show the hops between your computer and another host on Windows?",
        options: [
            "ipconfig",
            "mkdir",
            "tracert",
            "python"
        ],
        answer: 2,
        explanation: "tracert displays the route and hops that packets take toward a destination."
    },
    {
        topic: "Day 1 • Networking",
        q: "In a URL, what is the part after '?' commonly used for?",
        code: "https://example.com/products?category=books#reviews",
        options: [
            "The protocol",
            "The domain",
            "Query parameters",
            "The port number"
        ],
        answer: 2,
        explanation: "The part after ? contains query parameters. In this example, category=books is a query parameter."
    },
    {
        topic: "Day 2 • HTTP",
        q: "Which HTTP method is normally used to request data from a server?",
        options: [
            "GET",
            "POST",
            "DELETE",
            "PATCH"
        ],
        answer: 0,
        explanation: "GET is commonly used to retrieve a resource from a server."
    },
    {
        topic: "Day 2 • HTTP",
        q: "What does HTTP status code 404 mean?",
        options: [
            "Success",
            "Created",
            "Not Found",
            "Internal Server Error"
        ],
        answer: 2,
        explanation: "404 means the requested resource could not be found."
    },
    {
        topic: "Day 2 • HTTP",
        q: "What can you inspect in the browser's Network tab?",
        options: [
            "Only HTML colors",
            "Requests, methods, headers, status codes and timing",
            "Only JavaScript variables",
            "Only the browser history"
        ],
        answer: 1,
        explanation: "The Network tab lets you inspect requests and responses, including headers, methods, status codes, and timing."
    },
    {
        topic: "Day 2 • HTML",
        q: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<p>",
            "<img>",
            "<a>",
            "<link>"
        ],
        answer: 2,
        explanation: "The <a> element creates hyperlinks."
    },
    {
        topic: "Day 3 • Forms",
        q: "Which form attribute specifies where the submitted data should be sent?",
        options: [
            "class",
            "action",
            "id",
            "placeholder"
        ],
        answer: 1,
        explanation: "The action attribute defines the destination URL that receives the submitted form data."
    },
    {
        topic: "Day 3 • Forms",
        q: "Which element is best for a multi-line message field?",
        options: [
            "<input type='text'>",
            "<select>",
            "<textarea>",
            "<option>"
        ],
        answer: 2,
        explanation: "textarea is designed for multi-line text input."
    },
    {
        topic: "Day 3 • CSS",
        q: "Which CSS selector targets an element with id='title'?",
        options: [
            ".title",
            "#title",
            "title",
            "*title"
        ],
        answer: 1,
        explanation: "An ID selector starts with #, so #title targets id='title'."
    },
    {
        topic: "Day 3 • CSS",
        q: "What does :hover represent in CSS?",
        options: [
            "The state when the mouse is over an element",
            "The first element on the page",
            "A mobile breakpoint",
            "A hidden element"
        ],
        answer: 0,
        explanation: ":hover applies styles while the pointer is over an element."
    },
    {
        topic: "Day 4 • Flexbox",
        q: "In Flexbox, which property controls alignment along the main axis?",
        code: `.container {
  display: flex;
  justify-content: space-between;
}`,
        options: [
            "align-items",
            "justify-content",
            "grid-template-columns",
            "position"
        ],
        answer: 1,
        explanation: "justify-content distributes items along the Flexbox main axis."
    },
    {
        topic: "Day 4 • Flexbox",
        q: "What does flex-wrap: wrap allow flex items to do?",
        options: [
            "Rotate",
            "Move onto a new line when needed",
            "Become invisible",
            "Change into grid items"
        ],
        answer: 1,
        explanation: "flex-wrap: wrap allows items to wrap onto additional lines when the available space is too small."
    },
    {
        topic: "Day 4 • Grid",
        q: "What layout does this CSS create?",
        code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
        options: [
            "Three equal columns",
            "Three equal rows",
            "One fixed column",
            "Three flex items"
        ],
        answer: 0,
        explanation: "repeat(3, 1fr) creates three equal columns."
    },
    {
        topic: "Day 4 • Responsive Design",
        q: "What is the main purpose of a media query?",
        options: [
            "To connect a database",
            "To apply CSS based on screen/device conditions",
            "To send HTTP requests",
            "To create HTML elements"
        ],
        answer: 1,
        explanation: "Media queries apply different CSS rules based on conditions such as viewport width."
    },
    {
        topic: "Day 5 • Transitions",
        q: "What is the purpose of a CSS transition?",
        options: [
            "To create a database table",
            "To control how smoothly a style changes from one state to another",
            "To define HTML structure",
            "To send a POST request"
        ],
        answer: 1,
        explanation: "Transitions control the visual change between states, such as normal and :hover."
    },
    {
        topic: "Day 5 • Transforms",
        q: "What does transform: translateY(-4px) do?",
        code: `button:hover {
  transform: translateY(-4px);
}`,
        options: [
            "Moves the button upward by 4px",
            "Moves the button downward by 4px",
            "Rotates the button",
            "Makes the button 4px wider"
        ],
        answer: 0,
        explanation: "A negative translateY value moves the element upward."
    },
    {
        topic: "Day 5 • Animations",
        q: "What is @keyframes used for?",
        options: [
            "To define animation stages",
            "To create a form",
            "To make a grid",
            "To set an HTTP header"
        ],
        answer: 0,
        explanation: "@keyframes defines the checkpoints or stages of a CSS animation."
    },
    {
        topic: "Day 5 • Frameworks",
        q: "Which statement best describes Bootstrap and Tailwind CSS?",
        options: [
            "Both are databases",
            "Bootstrap offers many pre-built components, while Tailwind is utility-first",
            "Tailwind is only for JavaScript",
            "Bootstrap is an HTTP protocol"
        ],
        answer: 1,
        explanation: "Bootstrap is known for pre-built UI components and its grid, while Tailwind provides utility classes for composing custom designs."
    }
];


/* =========================
   HTML Elements
========================= */

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const scoreLive = document.getElementById("score-live");
const progressBar = document.getElementById("progress-bar");
const topicTag = document.getElementById("topic-tag");

const questionText = document.getElementById("question-text");

const codeBox = document.getElementById("code-box");
const codeText = document.getElementById("code-text");

const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");

const finalScore = document.getElementById("final-score");
const finalPercent = document.getElementById("final-percent");

const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const resultBreakdown = document.getElementById("result-breakdown");


/* =========================
   Quiz Variables
========================= */

let currentQuestion = 0;
let score = 0;
let answered = false;
let topicScores = {};


/* =========================
   Start Quiz
========================= */

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    topicScores = {};

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


/* =========================
   Show Question
========================= */

function showQuestion() {
    answered = false;

    nextBtn.classList.add("hidden");

    feedback.className = "feedback hidden";
    feedback.textContent = "";

    answersContainer.innerHTML = "";

    const item = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreLive.textContent = `Score: ${score}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    topicTag.textContent = item.topic;

    questionText.textContent = item.q;


    /* Show Code */

    if (item.code) {
        codeBox.classList.remove("hidden");
        codeText.textContent = item.code;
    } else {
        codeBox.classList.add("hidden");
        codeText.textContent = "";
    }


    /* Create Answer Buttons */

    item.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answersContainer.appendChild(button);
    });
}


/* =========================
   Select Answer
========================= */

function selectAnswer(selectedIndex, selectedButton) {
    if (answered) {
        return;
    }

    answered = true;

    const item = questions[currentQuestion];

    const buttons = [
        ...answersContainer.querySelectorAll(".answer-btn")
    ];

    const isCorrect = selectedIndex === item.answer;


    /* Disable Buttons */

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === item.answer) {
            button.classList.add("correct");
        }
    });


    /* Correct Answer */

    if (isCorrect) {
        score++;

        selectedButton.classList.add("correct");

        feedback.className = "feedback correct-feedback";

        feedback.textContent =
            "✅ Correct! " + item.explanation;
    }


    /* Wrong Answer */

    else {
        selectedButton.classList.add("wrong");

        feedback.className = "feedback wrong-feedback";

        feedback.textContent =
            "❌ Not quite. " + item.explanation;
    }


    /* Day Score */

    const day = item.topic.split("•")[0].trim();

    if (!topicScores[day]) {
        topicScores[day] = {
            correct: 0,
            total: 0
        };
    }

    topicScores[day].total++;

    if (isCorrect) {
        topicScores[day].correct++;
    }


    /* Update Score */

    scoreLive.textContent = `Score: ${score}`;


    /* Next Button */

    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = "See Results";
    } else {
        nextBtn.textContent = "Next Question";
    }

    nextBtn.classList.remove("hidden");
}


/* =========================
   Next Question
========================= */

function nextQuestion() {
    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}


/* =========================
   Show Results
========================= */

function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const percent =
        Math.round((score / questions.length) * 100);

    finalScore.textContent =
        `${score}/${questions.length}`;

    finalPercent.textContent =
        `${percent}%`;


    /* Result Message */

    if (score >= 18) {
        resultIcon.textContent = "🏆";
        resultTitle.textContent = "Web Master";

        resultMessage.textContent =
            "Excellent! You have a strong understanding of Week 5 concepts.";
    }

    else if (score >= 15) {
        resultIcon.textContent = "🔥";
        resultTitle.textContent = "Great Job";

        resultMessage.textContent =
            "Very good! You understand most of the week's web development concepts.";
    }

    else if (score >= 10) {
        resultIcon.textContent = "👍";
        resultTitle.textContent = "Good Progress";

        resultMessage.textContent =
            "Nice work! Review the topics you missed and try again.";
    }

    else {
        resultIcon.textContent = "📚";
        resultTitle.textContent = "Review Week 5";

        resultMessage.textContent =
            "A quick review of the Week 5 notes will help. Then give the quiz another try.";
    }


    /* Result Breakdown */

    resultBreakdown.innerHTML = "";

    for (let day = 1; day <= 5; day++) {
        const key = `Day ${day}`;

        const data = topicScores[key] || {
            correct: 0,
            total: 0
        };

        const box = document.createElement("div");

        box.className = "breakdown-item";

        box.innerHTML = `
            <strong>${data.correct}/${data.total}</strong>
            <span>${key}</span>
        `;

        resultBreakdown.appendChild(box);
    }
}


/* =========================
   Buttons Events
========================= */

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

restartBtn.addEventListener("click", startQuiz);
