const questions = {

    math: {

        easy: [{
            q: {
                ku: "2+2 چەندە؟",
                en: "What is 2+2?"
            },
            a: {
                ku: ["3", "4", "5", "6"],
                en: ["3", "4", "5", "6"]
            },
            c: 1
        }, {
            q: {
                ku: "5+3 چەندە؟",
                en: "What is 5+3?"
            },
            a: {
                ku: ["7", "8", "9", "10"],
                en: ["7", "8", "9", "10"]
            },
            c: 1
        }],

        medium: [{
            q: {
                ku: "12×3 چەندە؟",
                en: "What is 12×3?"
            },
            a: {
                ku: ["36", "30", "40", "42"],
                en: ["36", "30", "40", "42"]
            },
            c: 0
        }],

        hard: [{
            q: {
                ku: "16×16 چەندە؟",
                en: "What is 16×16?"
            },
            a: {
                ku: ["216", "256", "196", "226"],
                en: ["216", "256", "196", "226"]
            },
            c: 1
        }]
    },

    programming: {

        easy: [{
            q: {
                ku: "HTML بۆ چی بەکاردێت؟",
                en: "HTML is used for?"
            },
            a: {
                ku: ["وێب", "یاری", "AI", "OS"],
                en: ["Web", "Game", "AI", "OS"]
            },
            c: 0
        }],

        medium: [{
            q: {
                ku: "PHP چییە؟",
                en: "What is PHP?"
            },
            a: {
                ku: ["Backend", "Frontend", "Game", "Cloud"],
                en: ["Backend", "Frontend", "Game", "Cloud"]
            },
            c: 0
        }],

        hard: [{
            q: {
                ku: "Node.js چییە؟",
                en: "What is Node.js?"
            },
            a: {
                ku: ["زمان", "Runtime", "یاری", "OS"],
                en: ["Language", "Runtime", "Game", "OS"]
            },
            c: 1
        }]
    },

    general: {

        easy: [{
            q: {
                ku: "خۆر چییە؟",
                en: "What is the Sun?"
            },
            a: {
                ku: ["ئەستێرە", "گەردوون", "مانگ", "زەوی"],
                en: ["Star", "Planet", "Moon", "Earth"]
            },
            c: 0
        }],

        medium: [{
            q: {
                ku: "پایتەختی عێراق چییە؟",
                en: "What is the capital of Iraq?"
            },
            a: {
                ku: ["هەولێر", "بەغدا", "بەسرە", "موسڵ"],
                en: ["Erbil", "Baghdad", "Basra", "Mosul"]
            },
            c: 1
        }],

        hard: [{
            q: {
                ku: "گەورەترین ئۆقیانوس کامەیە؟",
                en: "What is the largest ocean?"
            },
            a: {
                ku: ["هیندی", "ئارام", "ئەتلەسی", "ئەرکتیکی"],
                en: ["Indian", "Pacific", "Atlantic", "Arctic"]
            },
            c: 1
        }]
    }
};
let diff = "easy";
let selected = [];
let i = 0;
let score = 0;
let timer;

function setDiff(d) {
    diff = d;
}

function start(cat) {

    selected = questions[cat][diff] || questions[cat].easy;
    i = 0;
    score = 0;

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    updateScore();
    show();
}

function show() {

    if (i >= selected.length) {
        end();
        return;
    }

    let q = selected[i];

    document.getElementById("question")
        .innerText = q.q[lang];

    document.getElementById("answers")
        .innerHTML = "";

    q.a[lang].forEach((ans, index) => {

        let btn = document.createElement("button");

        btn.innerText = ans;

        btn.onclick = () => check(index);

        document.getElementById("answers")
            .appendChild(btn);
    });

    startTimer();

    updateBar();
}

function startTimer() {
    let t = 10;
    document.getElementById("timer").innerText = t;

    clearInterval(timer);

    timer = setInterval(() => {
        t--;
        document.getElementById("timer").innerText = t;

        if (t <= 0) {
            clearInterval(timer);
            next();
        }
    }, 1000);
}

function check(x) {

    clearInterval(timer);

    if (x === selected[i].c) {
        score++;
        updateScore();
    }

    next();
}

function next() {
    i++;
    show();
}

function updateScore() {
    document.getElementById("score").innerText = score;
}

function updateBar() {
    document.getElementById("bar").style.width =
        (i / selected.length) * 100 + "%";
}

function end() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("final").innerText =
        score + " / " + selected.length;
}