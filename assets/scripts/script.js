function chandeColor(){
    let element = document.getElementById("el1");
    element.classList.toggle("fire");
    console.log(btn);
}

let btn = document.getElementById("btn");
btn.addEventListener('click', chandeColor);

let nameUser = prompt('Введите имя пользователя:');
alert('Привет, ' + nameUser);
let oldUser = +(prompt('Сколько вам лет?'));
switch (oldUser) {
    case 18: alert('Вы совершеннолетний, все можно!');
        break;
    case 10: alert('Вам надо учить уроки!');
        break;
    case 30: alert('Ложитесь спать, завтра на работу');
        break;
    default: alert('Мы не знаем, что Вам делать');
}