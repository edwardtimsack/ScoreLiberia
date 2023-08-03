
const switchTheme = document.querySelector('.ri-moon-line');
let wrapper = document.querySelector('.wrapper');
let aside = document.querySelector('.one');
let asideTitle = document.querySelector('.one h1');
let asideSelect = document.querySelector('.one select');
let todayMatch = document.querySelector('.today_match')
let liveMatches = document.querySelector('.live_matches');
let liveButton = document.querySelector('.live_matches button');

let last = document.querySelector('.two');
let container = document.querySelector('.second');
let greetings = document.querySelector('.greetings h1');
let league = document.querySelector('.leag h1');
let league1 = document.querySelector('#leag-h1');

let lastArticle = document.querySelector('.last_article')
let navI = document.querySelectorAll('.nav i');
let body = document.querySelector('body');
let tableIcon = document.querySelectorAll('.table i');


switchTheme.addEventListener('click' , function() {
    body.style.backgroundColor = 'white';
    // tableIcon.style.color = 'black'
    wrapper.style.backgroundColor = 'rgb(245, 241, 241)';
    aside.style.backgroundColor = 'white';
    aside.style.color = 'black';
    asideTitle.style.color = 'black';
    league.style.color = 'black';
    league1.style.color = 'black';

    liveMatches.style.backgroundColor = 'white';
    liveMatches.style.color = 'black';
    liveButton.style.color = 'white';
    todayMatch.style.color = 'black';
    todayMatch.style.backgroundColor = 'white';
    lastArticle.style.backgroundColor = 'white';
    greetings.style. color = 'black';

    navI.style.color = 'black';
    navI.style.backgroundColor = 'white';

})
