let lang = "ku";

const text = {

    ku: {
        title: "⚡ یاری پرسیار و وەڵام",
        category: "📚 بەش",
        difficulty: "🎚 ئاست",
        math: "📐 بیرکاری",
        code: "💻 کۆد",
        general: "🌍 گشتی",
        easy: "🟢 ئاسان",
        medium: "🟡 مامناوەند",
        hard: "🔴 سەخت",
        result: "🏆 ئەنجام",
        bestScore: "🏆 باشترین سکۆر",
        playAgain: "🔄 دووبارە یاری بکە"
    },

    en: {
        title: "⚡ Quiz Game",
        category: "📚 Category",
        difficulty: "🎚 Difficulty",
        math: "📐 Math",
        code: "💻 Code",
        general: "🌍 General",
        easy: "🟢 Easy",
        medium: "🟡 Medium",
        hard: "🔴 Hard",
        result: "🏆 Result",
        bestScore: "🏆 Best Score",
        playAgain: "🔄 Play Again"
    }

};

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
                ku: ["7", "10", "9", "8"],
                en: ["7", "10", "9", "8"]
            },

            c: 3,
        }, {

            q: {
                ku: "8+4 چەندە؟",
                en: "What is 8+4?"
            },

            a: {
                ku: ["11", "13", "12", "14"],
                en: ["11", "13", "12", "14"]
            },
            c: 2

        }, {

            q: {

                ku: "10-6 چەندە؟",
                en: "What is 10-6?"
            },
            a: {
                ku: ["4", "3", "5", "6"],
                en: ["4", "3", "5", "6"]
            },
            c: 0,


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
        }, {
            q: {
                ku: "15÷3 چەندە؟",
                en: "What is 15÷3?"
            },

            a: {
                ku: ["4", "5", "6", "3"],
                en: ["4", "5", "6", "3"]
            },

            c: 1
        }, {
            q: {
                ku: "9×9 چەندە؟",
                en: "What is 9×9?"
            },

            a: {
                ku: ["90", "72", "99", "81"],
                en: ["90", "72", "99", "81"]
            },

            c: 3
        }, {
            q: {
                ku: "20÷4 چەندە؟",
                en: "What is 20÷4?"
            },

            a: {
                ku: ["4", "6", "5", "7"],
                en: ["4", "6", "5", "7"]
            },

            c: 2
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

        }, {

            q: {
                ku: "144÷12 چەندە؟",
                en: "What is 144÷12?"
            },

            a: {
                ku: ["10", "11", "12", "13"],
                en: ["10", "11", "12", "13"]
            },

            c: 2

        }, {

            q: {
                ku: "25×25 چەندە؟",
                en: "What is 25×25?"
            },

            a: {
                ku: ["625", "575", "600", "650"],
                en: ["625", "575", "600", "650"]
            },

            c: 0

        }, {

            q: {
                ku: "169÷13 چەندە؟",
                en: "What is 169÷13?"
            },

            a: {
                ku: ["11", "12", "14", "13"],
                en: ["11", "12", "14", "13"]
            },

            c: 3

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

        }, {

            q: {
                ku: "CSS بۆ چی بەکاردێت؟",
                en: "CSS is used for?"
            },

            a: {
                ku: ["ژیری دەست کرد", "یاری", "دیزاین", "OS"],
                en: ["AI", "Game", "Style", "OS"]
            },
            c: 2

        }, {

            q: {
                ku: "JavaScript بۆ چی بەکاردێت؟",
                en: "JavaScript is used for?"
            },

            a: {
                ku: ["یاری", "OS", "AI", "وێب"],
                en: ["Game", "OS", "AI", "Web"]
            },

            c: 3
        }, {

            q: {
                ku: "Python بۆ چی بەکاردێت؟",
                en: "Python is used for?"
            },

            a: {
                ku: ["AI", "OS", "یاری", "وێب"],
                en: ["AI", "OS", "Game", "Web"]
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
        }, {
            q: {
                ku: "CSS Flexbox چییە؟",
                en: "What is CSS Flexbox?"
            },

            a: {
                ku: ["game", "Programming Language", "Layout", "OS"],
                en: ["Game", "Programming Language", "Layout", "OS"]
            },

            c: 2

        }, {
            q: {
                ku: "API چییە؟",
                en: "What is API?"
            },

            a: {
                ku: ["Game", "Interface", "Programming Language", "OS"],
                en: ["Game", "Interface", "Programming Language", "OS"]
            },

            c: 1

        }, {

            q: {
                ku: "GitHub چییە؟",
                en: "What is GitHub?"
            },

            a: {
                ku: ["Game", "Programming Language", "OS", "Code Hosting"],
                en: ["Game", "Programming Language", "OS", "Code Hosting"]
            },

            c: 3

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

        }, {

            q: {
                ku: "React چییە؟",
                en: "What is React?"
            },

            a: {
                ku: ["Library", "Framework", "OS", "Game"],
                en: ["Library", "Framework", "OS", "Game"]
            },

            c: 0

        }, {

            q: {
                ku: "Git چییە؟",
                en: "What is Git?"
            },

            a: {
                ku: ["Game", "Programming Language", "OS", "Version Control"],
                en: ["Game", "Programming Language", "OS", "Version Control"]
            },

            c: 3

        }, {

            q: {
                ku: "Docker چییە؟",
                en: "What is Docker?"
            },
            a: {
                ku: ["Game", "OS", "Cloud", "Programming Language"],
                en: ["Game", "OS", "Cloud", "Programming Language"]
            },
            c: 2


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

            c: 0,
        }, {
            q: {
                ku: "شێوگی ئاو",
                en: "What is Water Formula?"
            },
            a: {
                ku: ["CO2", "H2O", "O2", "NaCl"],
                en: ["CO2", "H2O", "O2", "NaCl"]
            },
            c: 1

        }, {

            q: {
                ku: "زەوی چییە؟",
                en: "What is Earth?"
            },
            a: {
                ku: ["ئەستێرە", "خۆر", "مانگ", "هەسارە"],
                en: ["Star", "Sun", "Moon", "Planet"]
            },
            c: 3



        }, {

            q: {
                ku: "ڕەنگی ئاسمان چییە؟",
                en: "What is the color of the sky?"
            },
            a: {
                ku: ["شین", "سور", "زەرد", "مۆر"],
                en: ["Blue", "Red", "Yellow", "Purple"]
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

        }, {

            q: {
                ku: "کەی ئەمریکا دۆخی خۆی دەستپێکرد؟",
                en: "When did the USA declare its independence?"
            },

            a: {
                ku: ["1804", "1492", "1620", "1776"],
                en: ["1804", "1492", "1620", "1776"]
            },

            c: 3

        }, {

            q: {
                ku: "کەی جیهانەوە بەردەوام بوو؟",
                en: "When did World War II end?"
            },

            a: {
                ku: ["1945", "1918", "1939", "1965"],
                en: ["1945", "1918", "1939", "1965"]
            },

            c: 0

        }, {
            q: {
                ku: "کەی شەڕی نێوان ئەڵمان و ئینگلیس لە نێوانیاندا ڕوویدا؟",
                en: "When was the Battle of Britain?"
            },

            a: {
                ku: ["1938", "1916", "1940", "1939"],
                en: ["1938", "1916", "1940", "1939"]
            },

            c: 2


        }],

        hard: [{

            q: {
                ku: "گەورەترین ئۆقیانوس کامەیە؟",
                en: "What is the largest ocean?"
            },

            a: {
                ku: ["هیندی", "هێمن", "ئەتلەسی", "ئەرکتیکی"],
                en: ["Indian", "Pacific", "Atlantic", "Arctic"]
            },

            c: 1

        }, {

            q: {
                ku: "کەی شەڕی نێوان ئەڵمان و روس لە نێوانیاندا ڕوویدا؟",
                en: "When was the Battle of Stalingrad?"
            },

            a: {
                ku: ["1942", "1916", "1939", "1945"],
                en: ["1942", "1916", "1939", "1945"]
            },

            c: 0

        }, {

            q: {
                ku: "کەی شەڕی نێوان ئەڵمان و فەڕەنسا لە نێوانیاندا ڕوویدا؟",
                en: "When was the Battle of Verdun?"
            },

            a: {
                ku: ["1918", "1917", "1945", "1916"],
                en: ["1918", "1917", "1945", "1916"]
            },

            c: 3

        }, {

            q: {
                ku: "کەی شەڕی نێوان ئەڵمان و سوڤیەت لە نێوانیاندا ڕوویدا؟",
                en: "When was the Battle of Kursk?"
            },

            a: {
                ku: ["1945", "1941", "1943", "1942"],
                en: ["1945", "1941", "1943", "1942"]
            },

            c: 2

        }]
    }

};

let diff = "easy";
let selected = [];
let i = 0;
let score = 0;
let timer;

function setLang(l) {

    lang = l;

    document.documentElement.lang = l;

    if (l === "ku") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    document.getElementById("title")
        .innerText = text[l].title;

    document.getElementById("catText")
        .innerText = text[l].category;

    document.getElementById("diffText")
        .innerText = text[l].difficulty;

    document.getElementById("mathBtn")
        .innerText = text[l].math;

    document.getElementById("codeBtn")
        .innerText = text[l].code;

    document.getElementById("generalBtn")
        .innerText = text[l].general;

    document.getElementById("easyBtn")
        .innerText = text[l].easy;

    document.getElementById("mediumBtn")
        .innerText = text[l].medium;

    document.getElementById("hardBtn")
        .innerText = text[l].hard;

    document.getElementById("resultText")
        .innerText = text[l].result;

    document.getElementById("againBtn")
        .innerText = text[l].playAgain;

    localStorage.setItem("lang", l);
}

function setDiff(d) {
    diff = d;
}

function start(cat) {



    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    selected = shuffle([...questions[cat][diff]]);

    i = 0;
    score = 0;

    document.getElementById("menu")
        .classList.add("hidden");

    document.getElementById("game")
        .classList.remove("hidden");

    document.getElementById("score")
        .innerText = score;

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

        let btn =
            document.createElement("button");

        btn.innerText = ans;

        btn.onclick = () => check(index);

        document.getElementById("answers")
            .appendChild(btn);

    });

    startTimer();
    document.getElementById("timer").style.color = "white";

    document.getElementById("timerBar").style.background =
        "linear-gradient(90deg,#22c55e,#eab308,#ef4444)";
    updateBar();

    let qEl = document.getElementById("question");

    qEl.classList.remove("question-card");

    void qEl.offsetWidth;

    qEl.classList.add("question-card");
}

function startTimer() {

    let s = 10;
    let width = 100;

    document.getElementById("timer").innerText = s;
    document.getElementById("timerBar").style.width = "100%";

    clearInterval(timer);

    timer = setInterval(() => {
        s--;
        width -= 10;

        document.getElementById("timer").innerText = s;
        document.getElementById("timerBar").style.width = width + "%";

        // زیادکردنی لۆجیکی ڕەنگی سوور:
        if (s <= 5) {
            document.getElementById("timer").style.color = "red";
            document.getElementById("timerBar").style.background = "red";

        } else {
            // بۆ ئەوەی بگەڕێتەوە دۆخی ئاسایی ئەگەر کاتەکەت نوێ کردەوە
            document.getElementById("timer").style.color = "white";
            // لێرەدا دەتوانیت ڕەنگی پێشووی بارەکە دابنێیتەوە
        }

        if (s <= 5) {
            document.getElementById("timer").classList.add("red-text");
        } else {
            document.getElementById("timer").classList.remove("red-text");
        }

        if (s <= 0) {
            clearInterval(timer);
            // گەڕاندنەوەی ڕەنگی ئاسایی بۆ کاتەکە بۆ پرسیاری داهاتوو
            document.getElementById("timer").style.color = "white";
            i++;
            show();
        }



    }, 1000);
}


function check(x) {
    clearInterval(timer);

    let buttons = document.querySelectorAll("#answers button");
    buttons.forEach((btn, index) => {
        if (index === selected[i].c) {
            btn.style.background = "green";
        }
        if (index === x && x !== selected[i].c) {
            btn.style.background = "red";
        }
        btn.disabled = true;
    });

    if (x === selected[i].c) {
        score++;
        document.getElementById("correctSound").play();
    } else {
        document.getElementById("wrongSound").play();
    }
    navigator.vibrate(200);

    document.getElementById("score").innerText = score;

    setTimeout(() => {
        i++;
        show();
    }, 1000);
}

function updateBar() {

    document.getElementById("bar")
        .style.width =
        (i / selected.length) * 100 + "%";
}

function confetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 50,
            color: `hsl(${Math.random()*360},100%,60%)`
        });
    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.r, p.r);

            p.y += 2 + p.d * 0.05;

            if (p.y > canvas.height) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function end() {

    document.getElementById("game")
        .classList.add("hidden");

    document.getElementById("result")
        .classList.remove("hidden");

    let best =
        localStorage.getItem("best") || 0;



    if (score > best) {

        localStorage.setItem("best", score);

        best = score;
    }

    document.getElementById("final").innerHTML = `
    ⭐ ${score} / ${selected.length}
    <br><br>
    ${text[lang].bestScore}: ${best}
`;

    confetti();
}

let savedLang =
    localStorage.getItem("lang");

if (savedLang) {
    setLang(savedLang);

}

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    let btn =
        document.getElementById("themeBtn");

    if (document.body.classList.contains("light-mode")) {

        btn.innerText = "☀ Light Mode";

        localStorage.setItem("theme", "light");

    } else {

        btn.innerText = "🌙 Dark Mode";

        localStorage.setItem("theme", "dark");
    }
}

let savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    document.getElementById("themeBtn")
        .innerText = "☀ Light Mode";
}

let highScore = localStorage.getItem("highScore") || 0;

if (score > highScore) {
    localStorage.setItem("highScore", score);
}


document.getElementById("question")
    .classList.remove("question-card");

void document.getElementById("question")
    .offsetWidth;


let deferredPrompt;

window.addEventListener("beforeinstallprompt", e => {

    e.preventDefault();

    deferredPrompt = e;

    document.getElementById("installBtn")
        .style.display = "block";
});

document.getElementById("installBtn")
    .addEventListener("click", async() => {

        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

        deferredPrompt = null;
    });


if ("Notification" in window) {

    Notification.requestPermission()
        .then(permission => {

            if (permission === "granted") {

                new Notification(
                    "🎮 Quiz Pro", {
                        body: "بەخێربێیت بۆ یارییەکە!"
                    }
                );
            }
        });
}




if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js")
            .then(reg => console.log("SW Registered"))
            .catch(err => console.log(err));
    });
}

function saveGame() {
    localStorage.setItem("quizIndex", i);
    localStorage.setItem("quizScore", score);
}

function loadGame() {
    i = Number(localStorage.getItem("quizIndex")) || 0;
    score = Number(localStorage.getItem("quizScore")) || 0;
}




async function shareScore() {

    await navigator.share({
        title: "Quiz Pro",
        text: `I scored ${score}/${selected.length}`
    });

}
let games =
    Number(localStorage.getItem("games")) || 0;

games++;

localStorage.setItem("games", games);

if (score >= 3) {
    diff = "hard";
} else if (score >= 2) {
    diff = "medium";
} else {
    diff = "easy";
}



if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(err => console.log(err));
    });
}