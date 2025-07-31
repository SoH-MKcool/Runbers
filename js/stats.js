import Rank from "./rank.js";
let timesWon = parseInt(localStorage.getItem("timesWon")) || 0;
let timesLost = parseInt(localStorage.getItem("timesLost")) || 0;

let rating = timesWon - timesLost;

// export function updateRank(_rating, _ratingList) {
//     let rank;
//     let _className = 'tier PI';

//     let _result = {
//         rank: "Iron Tier",
//         className: "tier Iron"
//     };

//     for (var i = 0; i <= 100; i += 1) {
//         let tenStep = Math.floor(i / 10) * 10;
//         console.log(_rating, tenStep)

//         if (_rating == i) {
//             if (ratingList[tenStep]) {
//                 _result = {
//                     'rank': ratingList[tenStep].rank,
//                     'className': ratingList[tenStep].className
//                 };
//                 break;
//             }
//         }
//     }
//     return _result;
// }

let __rank = new Rank;

function displayStats(_timesWon, _timesLost) {
    let _rank = __rank.updateRank(rating);

    document.getElementById('timesWon').innerText = _timesWon;
    document.getElementById('timesLost').innerText = _timesLost;

    document.getElementById('rank').innerText = _rank['rank'];
    document.getElementById('rank').className = _rank['className'];
}

__rank.updateRank(rating)
displayStats(timesWon, timesLost);


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Result', 'Times'],
        ['Times Won', timesWon],
        ['Times Lost', timesLost]
    ]);

    // Set Options
    const options = {
        title: 'Plays Statistic',
        fontName: 'Arial',
        fontSize: 15,
        backgroundColor: '#f4f4f4',
        colors: ['green', 'red'],
        legend: 'bottom'
    };

    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    chart.draw(data, options);
}

