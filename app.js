
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
 
// league table 
// let rank = document.querySelector('.rank');
// let logo = document.querySelectorAll('.pics');
// let teamName = document.querySelector('.team-name');
// let win = document.querySelector('.win');
// let draw = document.querySelector('.draw');
// let lose = document.querySelector('.lose');
// let gamePlayed = document.querySelector('.match-played');
// let point = document.querySelector('.point');
// leagueTitle.innerHTML = "League Table"
let target = document.querySelector('.teams')

const leagueTable = [
    {
        position: 1,
        clubName: "LISCR",
        clubLogo: './img/LISCR FC.png',
        gameWon: 19,
        gameDrawn: 5,
        gameLoss: 2,
        matchPlayed: 26,
        points: 62
    },
    {
        position: 2,
        clubName: "Bea Mount",
        clubLogo: './img/Bea-Mountain.png',
        gameWon: 16,
        gameDrawn: 10,
        gameLoss: 0,
        matchPlayed: 26,
        points: 58
    },
    {
        position: 3,
        clubName: "Wantaga",
        clubLogo: './img/Wantaga1.png',
        gameWon: 14,
        gameDrawn: 7,
        gameLoss: 5,
        matchPlayed: 26,
        points: 49
    },
    {
        position: 4,
        clubName: "Mighty Barrole",
        clubLogo: './img/Mighty Barrole1.png',
        gameWon: 10,
        gameDrawn: 9,
        gameLoss: 7,
        matchPlayed: 26,
        points: 39
    },
    {
        posititon: 5,
        clubName: "Heaven Eleven",
        clubLogo: './img/Heaven Eleven1.png',
        gameWon: 10,
        gameDrawn: 9,
        gameLoss: 7,
        matchPlayed: 26,
        points: 39
    },
    {
        position: 6,
        clubName: "Nimba Kwado",
        clubLogo: './img/Nimba Kwado1.png',
        gameWon: 9,
        gameDrawn: 10,
        gameLoss: 7,
        matchPlayed: 26,
        points: 37
    },
    {
        position: 7,
        clubName: "Muscat",
        clubLogo: './img/Muscat1.png',
        gameWon: 10,
        gameDrawn: 4,
        gameLoss: 12,
        matchPlayed: 26,
        points: 34
    },
    {
        position: 8,
        clubName: "LPRC Oilers",
        clubLogo: './img/LRPC-Oilers-logo-128x128.jpg',
        gameWon: 9,
        gameDrawn: 6,
        gameLoss: 11,
        matchPlayed: 26,
        points: 33
    },
    {
        position: 9,
        clubName: "Cece United",
        clubLogo: './img/Cece-United.png',
        gameWon: 7,
        gameDrawn: 9,
        gameLoss: 10,
        matchPlayed: 26,
        points: 30 
    },
    {
        position: 10,
        clubName: "Invicible Eleven",
        clubLogo: './img/Invicible Eleven1.png',
        gameWon: 8,
        gameDrawn: 5,
        gameLoss: 13,
        matchPlayed: 26,
        points: 29
    },
    {
        position: 11,
        clubName: "Freeport",
        clubLogo: './img/Freeport.png',
        gameWon: 7,
        gameDrawn: 5,
        gameLoss: 14,
        matchPlayed: 26,
        points: 26
    },
    {
        position: 12,
        clubName: "Jubilee",
        clubLogo: './img/Jubilee.png',
        gameWon: 6,
        gameDrawn: 8,
        gameLoss: 12,
        matchPlayed: 26,
        points: 26
    },
    {
        position: 13,
        clubName: "Nimba United",
        clubLogo: './img/nimba_united2-128x128.jpg',
        gameWon: 3,
        gameDrawn: 9,
        gameLoss: 14,
        matchPlayed: 26,
        points: 18
    },
    {
        position: 14,
        clubName: "Sandi",
        clubLogo: './img/Sandi.png',
        gameWon: 6,
        gameDrawn: 0,
        gameLoss: 20,
        matchPlayed: 26,
        points: 19
    }
]


function displayLeague() {
    for (let i = 0; i < leagueTable.length; i++) {
        const aboutTeam = document.createElement('div');
        const ranks = document.createElement('div');
        const teamLogo = document.createElement('div');
        const teamNames = document.createElement('div');
        const win = document.createElement('div');
        const loss = document.createElement('div');
        const draw = document.createElement('div');
        const gamePlayed = document.createElement('div');
        const gamePoints = document.createElement('div');

        aboutTeam.classList.add('about');
        ranks.innerHTML = leagueTable[i].position;
        teamNames.innerHTML = leagueTable[i].clubName;
        win.innerHTML = leagueTable[i].gameWon;
        draw.innerHTML = leagueTable[i].gameDrawn;
        loss.innerHTML = leagueTable[i].gameLoss;
        gamePlayed.innerHTML = leagueTable[i].matchPlayed;
        gamePoints.innerHTML = leagueTable[i].points;

        aboutTeam.appendChild(ranks);
        aboutTeam.appendChild(teamNames);
        aboutTeam.appendChild(win);
        aboutTeam.appendChild(draw);
        aboutTeam.appendChild(loss);
        aboutTeam.appendChild(gamePlayed);
        aboutTeam.appendChild(gamePoints);

        target.appendChild(aboutTeam);
        console.log(leagueTable[i].position)
    }
}

displayLeague();


// function createOption(){
//     // const leagueTitle = document.createElement('h1');
//     const aboutTeam = document.createElement('div')
//     const ranks = document.createElement('div');
//     const teamLogo = document.createElement('div');
//     const teamNames = document.createElement('div');
//     const win = document.createElement('div');
//     const loss = document.createElement('div');
//     const draw = document.createElement('div')
//     const gamePlayed = document.createElement('div');
//     const gamePoints = document.createElement('div');

//         aboutTeam.classList.add('about')
//         // leagueTitle.innerHTML = 'League Table';
//         ranks.innerHTML = leagueTable[0].position;
//         teamNames.innerHTML = leagueTable[0].clubName;
//         win.innerHTML = leagueTable[0].gameWon;
//         draw.innerHTML = leagueTable[0].gameDrawn;
//         loss.innerHTML = leagueTable[0].gameLoss
//         gamePlayed.innerHTML = leagueTable[0].matchPlayed;
//         gamePoints.innerHTML = leagueTable[0].points
//         // console.log(ranks)

//     aboutTeam.appendChild(ranks);
//     aboutTeam.appendChild(teamNames);
//     aboutTeam.appendChild(win);
//     aboutTeam.appendChild(draw);

//     aboutTeam.appendChild(loss);
//     aboutTeam.appendChild(gamePlayed);
//     aboutTeam.appendChild(gamePoints)
//     console.log(aboutTeam)
//     target.appendChild(aboutTeam)
// }
// createOption()



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


})

// console.log(leagueTable[5].clubName)
// const clubLogoUrl = leagueTable[8].clubLogo;
// const image = new Image();
// image.src = clubLogoUrl;
// document.body.appendChild(image);

// let table = leagueTable;
// console.log(table);
// console.log(leagueCount);

// let leagueRank = leagueTable[leagueCount];
// console.log(leagueRank);
