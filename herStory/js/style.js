//Black mode
const themeToggleBtn = document.querySelector('.theme-toggle');
const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

themeToggleBtn.addEventListener('click', () => {
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

//Game
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
