function num(val) {
    val = Math.floor(val);
    return val;
}

function toPositive(n) {
    if (n < 0) {
        n = n * -1;
    }
    return n;
}

function digitalClockoptime() {
    time = setInterval(() => {
        ddd = '2022/12/31'
        date = toPositive(Math.floor((Date.now() - Date.parse(ddd))))
        sec = date / 1000
        days = sec / 86400
        hours = sec / 3600 % 24
        minutes = sec / 60 % 60
        seconds = sec % 60
        document.getElementById("timer").innerHTML = num(days) + ' : ' + num(hours) + ' : ' + num(minutes) + ' : ' + num(seconds);
    }, 1000)

}

digitalClockoptime();




function validate(form_id, email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = document.forms[form_id].elements[email].value;

    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }

}
let pop = document.getElementById('popup');
let butCl = document.querySelectorAll('.close-pupop')[0]
let cross = document.querySelectorAll('.popup_close')[0];
console.log(butCl)
butCl.addEventListener('click', () => {
    pop.style.display = 'none';
})

function dell() { pop.style.display = 'none'; };
cross.onclick = dell();