let timesWon = parseInt(localStorage.getItem("timesWon")) || 0;
let timesLost = parseInt(localStorage.getItem("timesLost")) || 0;

const setting = JSON.parse(localStorage.getItem('setting'));

let result = false;
let sum = 0;
let currentNumber = document.getElementById('currentNumber')
document.getElementById('startButton').addEventListener('click', function () {
    console.clear();
    document.getElementById('sumResult').style.display = "none";
    currentNumber.innerText = "";
    document.getElementById('sum').value = '';
    document.getElementById('startButton').disabled = true;

    sum = 0;

    const minNum = parseInt(setting.min);
    const maxNum = parseInt(setting.max);
    const speed = parseFloat(setting.speed * 1000);
    const amount = parseInt(setting.amount);

    let count = 0;

    console.log(`Min Number: ${minNum}, Max Number: ${maxNum}, Speed(ms): ${speed}, Amount of Numbers: ${amount}`);

    const interval = setInterval(() => {
        if (count < amount) {
            const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
            currentNumber.innerText = randomNumber;

            setTimeout(() => {
                currentNumber.innerText = '';
            }, 500);

            sum += randomNumber;
            console.log(sum);
            count++;
        } else {
            clearInterval(interval);
            document.getElementById('startButton').disabled = false;
        }
    }, speed);
});

document.getElementById('sum').addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        if (this.value == sum) {
            result = true;
            document.getElementById('sumResult').style.display = "block";
            sum = 0;
            timesWon++;
            localStorage.setItem('timesWon', JSON.stringify(timesWon));
        } else {
            timesLost++;
            localStorage.setItem('timesLost', JSON.stringify(timesLost));
        }
    };
});
