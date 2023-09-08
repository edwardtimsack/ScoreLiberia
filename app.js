
const switchTheme = document.querySelector('.ri-moon-line');
let wrapper = document.querySelector('.wrapper');
let aside = document.querySelector('.one');
let asideTitle = document.querySelector('.one h1');
let asideSelect = document.querySelector('.one select');
// let todayMatch = document.querySelector('.today_match')
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
let target = document.querySelector('.teams')
const currentMatch = document.querySelector('.today_match');
let searchInput = document.querySelector('input');
let ascendingAlphabetical = document.querySelector('#first');
let decendingAlphabetical = document.querySelector('#last');

let positionss = document.querySelector('#position')
let point = document.querySelector('.nav #point');
let sortLeagues = document.querySelector('#Sort_leagues');

sortLeagues.addEventListener('change' , function(){
    const selectedOption = sortLeagues.value;
    if(selectedOption === point.value){
    console.log('pointttttttt');
    sortTableByPointsAsc()
    }
    else if(selectedOption === positionss.value){
        console.log('positionsssssssss');
        sortTableByPositionDesc()
        }
        else if(selectedOption === decendingAlphabetical.value){
            console.log('descending')
            sortTableByClubNameDesc()
        }
        else if(selectedOption === ascendingAlphabetical.value){
            console.log('ascending');
            sortTableByClubNameAsc()
            }
    console.log(selectedOption);
});

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
        position: 5,
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

// sort function 
// Define global variables to keep track of the current sorting order
let sortByPointsAsc = false;
let sortByPointsDesc = false;

// Function to sort the league table by points in ascending order
function sortTableByPointsAsc() {
    leagueTable.sort((a, b) => a.points - b.points);
    displayLeague(); // Update the table on the page
    sortByPointsAsc = true;
    sortByPointsDesc = false;
}

// Function to sort the league table by points in descending order
function sortTableByPointsDesc() {
    leagueTable.sort((a, b) => b.points - a.points);
    displayLeague(); // Update the table on the page
    sortByPointsAsc = false;
    sortByPointsDesc = true;
}

// sortPostion Function
function sortTableByPositionDesc() {
    leagueTable.sort((a,b) => b.position - a.position);
    displayLeague()
    sortByPointsAsc = false;
    sortByPointsDesc = true;
}

// Function to sort the league table by club name in ascending order
function sortTableByClubNameAsc() {
    leagueTable.sort((a, b) => a.clubName.localeCompare(b.clubName));
    displayLeague(); // Update the table on the page
}

// Function to sort the league table by club name in descending order
function sortTableByClubNameDesc() {
    leagueTable.sort((a, b) => b.clubName.localeCompare(a.clubName));
    displayLeague(); // Update the table on the page
}

// Add event listeners to your sorting buttons or UI elements
// const sortClubNameAscButton = document.getElementById('sortClubNameAscButton');
// sortClubNameAscButton.addEventListener('click', sortTableByClubNameAsc);

// const sortClubNameDescButton = document.getElementById('sortClubNameDescButton');
// sortClubNameDescButton.addEventListener('click', sortTableByClubNameDesc);



// Add event listeners to your sorting buttons or UI elements
// const sortAscButton = document.getElementById('sortAscButton');
// sortAscButton.addEventListener('click', sortTableByPointsAsc);

// const sortDescButton = document.getElementById('sortDescButton');
// sortDescButton.addEventListener('click', sortTableByPointsDesc);

// Update your displayLeague function to include sorting criteria
// function displayLeague() {
//     // ... your existing code for displaying the table

//     // Check the sorting criteria and display an indicator
//     if (sortByPointsAsc) {
//         // Display an indicator for ascending order (e.g., an up arrow)
//         sortAscButton.classList.add('active');
//         sortDescButton.classList.remove('active');
//     } else if (sortByPointsDesc) {
//         // Display an indicator for descending order (e.g., a down arrow)
//         sortAscButton.classList.remove('active');
//         sortDescButton.classList.add('active');
//     } else {
//         // No sorting indicator when not sorted
//         sortAscButton.classList.remove('active');
//         sortDescButton.classList.remove('active');
//     }
// }






// const byPosition = leagueTable.sort((a,b) => {
//     return b.position - a.position;
// });
// console.log(byPosition)


 const Fixtures = [
    {
        id: 1,
        date: '2023-06-02',
        time: '3:00pm',
        stadium: "Samuel Kanyon Doe Sports Stadium",
        statuses: ':',
        homeTeam: {
            teamName: 'LISCR',
            score: 3,
            playerScore: 'Jim',
            playerAssist: 'Tim',
            logo: './img/LISCR FC.png'
        },
        awayTeam: {  // Corrected placement of awayTeam
            teamName: 'Freeport',
            score: 2,
            playerScore: 'James',
            playerAssist: 'Ben',
            logo: './img/Freeportt.png'
        },
        leagueName: 'LFA'
    },
    {
        id: 2,
        date: '2023-06-04',
        time: '1:00pm',
        stadium: "Samuel Kanyon Doe Sports Stadium",
        statuses: ':',
        homeTeam: {
            teamName: 'Sandi',
            score: 1,
            playerScore: 'Oscar',
            playerAssist: 'Albin',
            logo: './img/Sandi.png'
        },
        awayTeam: {  // Corrected placement of awayTeam
            teamName: 'Jubilee',
            score: 3,
            playerScore: 'Nathan',
            playerAssist: 'James',
            logo: './img/Jubile.png'
        },
        leagueName: 'LFA'
    },
    {
        id: 3,
        date: '2023-06-04',
        time: '4:00pm',
        stadium: "Antionette Tubman Stadium",
        statuses: ':',
        homeTeam: {
            teamName: 'Muscat',
            score: 0,
            playerScore: 'Ben',
            playerAssist: 'Dave',
            logo: './img/Muscat1.png'
        },
        awayTeam: {  // Corrected placement of awayTeam
            teamName: 'Wantaga',
            score: 2,
            playerScore: 'Albin',
            playerAssist: 'Emmanuel',
            logo: './img/Wantaga1.png'
        },
        leagueName: 'LFA'
    }
    

];

function lfaFixture() {

}


function displayLeague() {

    target.innerHTML = '';

    for (let i = 0; i < leagueTable.length; i++) {
        const searchQuery = searchInput.value.toLowerCase()
        if (leagueTable[i].clubName.toLowerCase().includes(searchQuery.toLowerCase())) {

        const aboutTeam = document.createElement('div');
        const ranks = document.createElement('div');
        const teamLogo = document.createElement('img');
        const teamNames = document.createElement('div');
        const win = document.createElement('div');
        const loss = document.createElement('div');
        const draw = document.createElement('div');
        const gamePlayed = document.createElement('div');
        const gamePoints = document.createElement('div');

        aboutTeam.classList.add('about');
        ranks.innerHTML = leagueTable[i].position;
        // teamLogo.src = leagueTable[i].clubLogo;
        teamNames.innerHTML = leagueTable[i].clubName;
        win.innerHTML = leagueTable[i].gameWon;
        draw.innerHTML = leagueTable[i].gameDrawn;
        loss.innerHTML = leagueTable[i].gameLoss;
        gamePlayed.innerHTML = leagueTable[i].matchPlayed;
        gamePoints.innerHTML = leagueTable[i].points;

        aboutTeam.appendChild(ranks);
        // aboutTeam.appendChild(teamLogo)
        aboutTeam.appendChild(teamNames);
        aboutTeam.appendChild(win);
        aboutTeam.appendChild(draw)
        aboutTeam.appendChild(loss);
        aboutTeam.appendChild(gamePlayed);
        aboutTeam.appendChild(gamePoints);

        target.appendChild(aboutTeam);
        // console.log(aboutTeam)
        // console.log(leagueTable[i].position)
        // console.log(leagueTable[i].teamLogo)
        }
    
    }
}
// Add an event listener to the search input field
const teamSearch = document.getElementById('teamSearch');
teamSearch.addEventListener('input', function () {
    const searchQuery = this.value;
    displayLeague(searchQuery);
});
displayLeague();



const lfaBox = document.querySelector('.today_match')


function lfaDivision() {
    const me = document.createElement('h1');
    const lfaDiv = document.createElement('div');
    const lfaLogo = document.createElement('img');
    lfaLogo.src = './img/LFA.png';
    lfaDiv.appendChild(lfaLogo)
    const leag = document.createElement('div');
    const leagName = document.createElement('h1');
    const leagMatch = document.createElement('p');

    lfaDiv.classList.add('team');

    leagName.innerHTML = 'LFA First Division'
    leagMatch.innerHTML = 'English - 3 Matches'

    leag.classList.add('leag')
    leag.appendChild(leagName);
    leag.appendChild(leagMatch);
    lfaDiv.appendChild(leag);
    lfaBox.appendChild(lfaDiv);

   
        for(let t = 0; t < Fixtures.length; t++){
            const fingers = document.createElement('div');
            const homeTeamlogo = document.createElement('img');
            const homeTeamName = document.createElement('h1');
            const homeTeamScore = document.createElement('p');
            const divider = document.createElement('p');
            const awayTeamScore = document.createElement('p');
            const awayTeamLogo = document.createElement('img');
            const awayTeamName = document.createElement('h1');

            homeTeamlogo.src = Fixtures[t].homeTeam.logo;
            homeTeamName.innerHTML = Fixtures[t].homeTeam.teamName;
            homeTeamScore.innerHTML = Fixtures[t].homeTeam.score;
            divider.innerHTML = Fixtures[t].statuses;
            awayTeamScore.innerHTML = Fixtures[t].awayTeam.score;
            awayTeamLogo.src = Fixtures[t].awayTeam.logo;
            awayTeamName.innerHTML = Fixtures[t].awayTeam.teamName;

            fingers.classList.add('table')


            fingers.appendChild(homeTeamlogo);
            fingers.appendChild(homeTeamName);
            fingers.appendChild(homeTeamScore);
            fingers.appendChild(divider);
            fingers.appendChild(awayTeamScore);
            fingers.appendChild(awayTeamLogo);
            fingers.appendChild(awayTeamName);
            lfaBox.appendChild(fingers)



            // console.log(divider);
            // console.log(homeTeamScore);
            // console.log(awayTeamScore);
            // console.log(homeTeamlogo);
            // console.log(awayTeamLogo);
            // console.log(homeTeamName);
            // console.log(awayTeamName);

            console.log(Fixtures[t].awayTeam.logo);
           
            



            

        }
}
    lfaDivision();

    
// const teamSearchInput = document.getElementById('teamSearch');
// const searchResultsContainer = document.getElementById('searchResults');
// teamSearchInput.addEventListener('input', function () {
//     const inputArea = teamSearchInput.value.toLowerCase();

//     // Clear the previous search results
//     searchResultsContainer.innerHTML = '';

//      // Check if the input area is empty
//      if (inputArea === '') {
//         return; // Exit the function and do not display any results
//     }
//     // Iterate through the leagueTable array and check for matching team names
//     for (let i = 0; i < leagueTable.length; i++) {
//         const team = leagueTable[i];
//         const teamName = team.clubName.toLowerCase();

//         if (teamName.includes(inputArea)) {
//             // Create a new div element for the matching team
//             const teamElement = document.createElement('div');
//             teamElement.classList.add('search-result');
//             teamElement.textContent = team.clubName;
//             searchResultsContainer.appendChild(teamElement);
//         }
//     }
//     // Check if no matching teams were found
//     if (searchResultsContainer.children.length === 0) {
//         const noResultsElement = document.createElement('div');
//         noResultsElement.textContent = 'No matching teams found.';
//         searchResultsContainer.appendChild(noResultsElement);
//     }
// });




//    const clubs = leagueTable[0].clubName;
//         console.log(clubs)
    


// switchTheme.addEventListener('click' , function() {
//     body.style.backgroundColor = 'white';
//     // tableIcon.style.color = 'black'
//     wrapper.style.backgroundColor = 'rgb(245, 241, 241)';
//     aside.style.backgroundColor = 'white';
//     aside.style.color = 'black';
//     asideTitle.style.color = 'black';
//     league.style.color = 'black';
//     league1.style.color = 'black';

//     liveMatches.style.backgroundColor = 'white';
//     liveMatches.style.color = 'black';
//     liveButton.style.color = 'white';
//     todayMatch.style.color = 'black';
//     todayMatch.style.backgroundColor = 'white';
//     lastArticle.style.backgroundColor = 'white';
//     greetings.style. color = 'black';


// })

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
