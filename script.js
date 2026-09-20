// ===============================
// PARTICLE BACKGROUND
// ===============================

const canvas = document.createElement("canvas");
canvas.id = "particles";

document.querySelector(".hero").appendChild(canvas);

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;

    }


    update() {

        this.x += this.speedX;
        this.y += this.speedY;


        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }


        if (this.y < 0 || this.y > canvas.height) {
            this.speedY *= -1;
        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#00f7ff";

        ctx.fill();

    }

}


function createParticles() {

    particles = [];

    const numberOfParticles = 100;


    for (let i = 0; i < numberOfParticles; i++) {

        particles.push(new Particle());

    }

}


function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(particle => {

        particle.update();
        particle.draw();

    });


    requestAnimationFrame(animate);

}


createParticles();

animate();



// ===============================
// CHATBOT
// ===============================

const chatbotButton = document.getElementById("chatbotButton");
const chatbotWindow = document.getElementById("chatbotWindow");
const closeChatbot = document.getElementById("closeChatbot");

const chatbotInput = document.getElementById("chatbotInput");
const sendChat = document.getElementById("sendChat");
const chatbotMessages = document.getElementById("chatbotMessages");



// ===============================
// OPEN CHATBOT
// ===============================

chatbotButton.onclick = function () {

    chatbotWindow.style.display = "flex";

};



// ===============================
// CLOSE CHATBOT
// ===============================

closeChatbot.onclick = function () {

    chatbotWindow.style.display = "none";

};



// ===============================
// BOT RESPONSES
// ===============================

function getBotReply(message) {

    const text = message.toLowerCase();


    // GREETING

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hi! 👋 I'm Jomar AI. You can ask me about Jomar, his skills, projects, or how to contact him.";

    }


    // ABOUT JOMAR
    

    if (
        text.includes("who are you") ||
        text.includes("about jomar") ||
        text.includes("who is jomar") ||
        text.includes("tell me about jomar")
    ) {

        return "Jomar Flores is an Information Technology student who is currently developing his programming and technical skills. He is interested in programming, web development, databases, and information technology.";

    }

    if (
    text.includes("age") ||
    text.includes("how old") ||
    text.includes("old are you")
) {

    return "Jomar is 20 years old and turning 21 this October 15. 🎂";

}

    // SKILLS

    if (
        text.includes("skill") ||
        text.includes("programming") ||
        text.includes("technology")
    ) {

        return "Jomar has basic knowledge of Java, SQL, HTML, CSS, and JavaScript. He is continuously improving his programming and technical skills.";

    }


    // JAVA

    if (text.includes("java")) {

        return "Jomar has a basic foundation in Java. He has practiced conditional statements, loops, Scanner input, and basic problem-solving programs.";

    }


    // SQL

    if (
        text.includes("sql") ||
        text.includes("database")
    ) {

        return "Jomar has basic SQL knowledge, including creating databases and tables, inserting records, and retrieving data using SQL queries.";

    }


    // WEB DEVELOPMENT

    if (
        text.includes("html") ||
        text.includes("css") ||
        text.includes("javascript") ||
        text.includes("web development")
    ) {

        return "Jomar is learning web development using HTML for structure, CSS for design, and JavaScript for interaction and functionality.";

    }


    // PROJECTS

    if (
        text.includes("project") ||
        text.includes("projects")
    ) {

        return "Jomar's projects include a Personal Portfolio Website, Java Programming Exercises, an SQL Database Project, and a Network Security Activity using Nmap and Kali Linux.";

    }


    // PORTFOLIO

    if (text.includes("portfolio")) {

        return "This portfolio website showcases Jomar's skills, achievements, projects, and technical learning journey.";

    }


    // CONTACT

    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("reach")
    ) {

        return "You can contact Jomar through his email: floresjomar284@gmail.com 📧";

    }


    // GOAL

    if (
        text.includes("goal") ||
        text.includes("future")
    ) {

        return "Jomar's goal is to continue learning and improve his programming, web development, database, and technical skills.";

    }


    // THANK YOU

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 😊 Feel free to ask me anything about Jomar and his portfolio.";

    }


    // DEFAULT

    return "I'm not sure about that yet. 🤔 Try asking me about Jomar, his skills, projects, goals, or contact information.";

}



// ===============================
// QUICK QUESTIONS
// ===============================

function askQuestion(question) {

    chatbotInput.value = question;

    sendMessage();

}



// ===============================
// SEND MESSAGE
// ===============================

function sendMessage() {

    const message = chatbotInput.value.trim();


    if (message === "") {
        return;
    }


    // USER MESSAGE

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.textContent = message;

    chatbotMessages.appendChild(userMessage);


    // CLEAR INPUT

    chatbotInput.value = "";


    // TYPING INDICATOR

    const typingMessage = document.createElement("div");

    typingMessage.className = "bot-message typing";

    typingMessage.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    chatbotMessages.appendChild(typingMessage);


    // AUTO SCROLL

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;


    // BOT RESPONSE

    setTimeout(function () {

        typingMessage.remove();


        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        botMessage.textContent = getBotReply(message);

        chatbotMessages.appendChild(botMessage);


        // AUTO SCROLL

        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    }, 1500);

}



// ===============================
// SEND BUTTON
// ===============================

sendChat.onclick = sendMessage;



// ===============================
// ENTER KEY
// ===============================

chatbotInput.onkeydown = function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

    }

};