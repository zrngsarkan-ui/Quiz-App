const questions = {
    math: {
        easy: [
            { q: "2+2=?", a: ["3", "6", "5s", "4"], c: 2 },
            { q: "5+3=?", a: ["6", "8", "9"], c: 1 }
        ],
        medium: [
            { q: "12*3=?", a: ["36", "32", "30"], c: 0 }
        ],
        hard: [
            { q: "144/12=?", a: ["10", "12", "14"], c: 1 }
        ]
    },
    programming: {
        easy: [
            { q: "HTML is?", a: ["Web", "Game", "AI"], c: 0 }
        ],
        medium: [
            { q: "JS runs in?", a: ["Browser", "Server", "Printer"], c: 0 }
        ],
        hard: [
            { q: "Node.js is?", a: ["Runtime", "Language", "Browser"], c: 0 }
        ]
    },
    general: {
        easy: [
            { q: "Sun is?", a: ["Star", "Planet", "Moon"], c: 0 }
        ],
        medium: [
            { q: "Capital of Iraq?", a: ["Baghdad", "Erbil", "Basra"], c: 0 }
        ],
        hard: [
            { q: "Largest ocean?", a: ["Pacific", "Atlantic", "Indian"], c: 0 }
        ]
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

    clearInterval(timer);

    if (i >= selected.length) {
        end();
        return;
    }

    let q = selected[i];

    document.getElementById("question").innerText = q.q;
    document.getElementById("answers").innerHTML = "";

    q.a.forEach((a, idx) => {
        let b = document.createElement("button");
        b.innerText = a;
        b.onclick = () => check(idx);
        document.getElementById("answers").appendChild(b);
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