//Black mode
const modeSwitchBtn = document.querySelector('.switch');
const mode = localStorage.getItem('theme');

mode && document.body.classList.add(mode);

modeSwitchBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
})

//Random alpha
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector(".headline p").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iterations += 1 / 2;
}, 30);
}

//Search bar
const f = document.getElementById('searchbar');
    const q = document.getElementById('message-search');
    const google = 'https://www.google.com/search?q=';

    function submitted(event) {
        event.preventDefault();
        const url = google + q.value;
        const win = window.open(url, '_blank');
        win.focus();
    }

    f.addEventListener('submit', submitted);

//Randome Game
var words = ["Did you see my bowl is empty?<br>Do something.", 
            "I got you a gift.<br>Oh no it still alive.", 
            "Dogs are always my friends, if I have soul.",
            "That box is my perfect bed.", 
            "It's 3 am.<br>I bet you like parkour, human."];
 
var container = document.getElementById('output');
function print(sentence){
   container.innerHTML = sentence;
 }
 
$('#button').click(function(){
    let sentence = words[Math.floor(Math.random() * words.length)];
    $('#output').empty(sentence);
    print(sentence);
});

//encode textarea input
function htmlDecode(input) {
    const textArea = document. createElement ("textarea");
    textArea.innerHTML = input;
    return textArea. value;
}
function htmlEncode(input) {
    const textArea = document.createElement ("textarea");
    textArea. innerText = input;
    return textArea. innerHTML.split ("<br>").join("\n");
}
function convert () {
    const textArea = document.getElementById("comments");
    const HTMLencoded = textArea.value;
    document.querySelectorAll("#userName, #Email, #Phone, #message-search").value = HTMLencoded;
}


