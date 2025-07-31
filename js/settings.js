window.onload = function () {
    const alrExisting = JSON.parse(localStorage.getItem('setting'));
    const min = document.getElementById('min').value = alrExisting.min;
    const max = document.getElementById('max').value = alrExisting.max;
    const speed = document.getElementById('speed').value = alrExisting.speed;
    const amount = document.getElementById('amount').value = alrExisting.amount;
};


document.getElementById('saveBtn').addEventListener('click', function () {
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    const speed = document.getElementById('speed').value;
    const amount = document.getElementById('amount').value;

    const setting = {
        min: min,
        max: max,
        speed: speed,
        amount: amount
    };

    localStorage.setItem('setting', JSON.stringify(setting));
    alert("Settings Preset saved")
})