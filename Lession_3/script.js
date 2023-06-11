p = 'Алевтина';
alert(`Привет, ${p}!`);

let user_name = prompt("Как вас зовут?", "Имя");
alert(`Привет, ${user_name}`);

function show_text(user_name){
    alert(`Привет, ${user_name}`);
}

show_text(user_name);

let bool = confirm("Ну что?");
if(bool) alert("Норм");
else alert ("Ну и пошел ты!");

/* alert(результат суммы чисел 152 и 8 равен ${152 + 8}); */
/* alert(152 + 8) */

/* 
function sum(a, b) {
    return a + b;
}

let result = sum(152, 8);
console.log(result);


alert(result) */
/* ima = "Настя"

alert(Привет: ${ima}) */

/* n = prompt("Введите ваше имя" , "можно прозвище");
alert(Привет, ${n}!); */

/* n = prompt("Введите ваше имя" , "можно прозвище");
function halloname(n) {
    alert(Привет, ${n});
}

halloname(n) */

/* Задача: вывести на экран ****в диалоговом окне текст с сообщением “Вы уверены?” 
и кнопками «ОК» , «Отмена».

- При нажатии на кнопку “ОК” 
вывести в диалоговом окне текст с сообщением “Мы рады, что Вы уверены!”.
- При нажатии на кнопку “Отмена” 
вывести в диалоговом окне текст с сообщением “Жаль, что Вы не уверены…”. */

/* function showConfirmation() {
    let result = confirm("Вы уверены?");
    if (result) {
      alert("Мы рады, что Вы уверены!");
    } else {
      alert("Жаль, что Вы не уверены…");
    }
  }

  showConfirmation() */

/* if (confirm('вы уверены?')) {
    alert("Мы рады, что Вы уверены!");
    } else {
      alert("Жаль, что Вы не уверены…");
    }

    Задача: перепишите код, используя конструкцию switch-case, 
запрашивая возраст пользователя через диалоговое окно. */

/* 
let age = 101;

if (age == 18) {
    alert('Вы совершеннолетний, все можно!');
} else if (age == 10) {
    alert('Вам надо учить уроки!');
} else if (age == 30) {
    alert('Ложитесь спать, завтра на работу');
} else {
    alert('Мы не знаем что Вам делать'); 
}*/


const age = prompt("Сколько Вам лет?");


  switch (age) {
    case 18:
      alert("Вы совершеннолетний, все можно!");
      break;
    case 10:
      alert("Вам надо учить уроки!");
      break;
    case 30:
      alert("Ложитесь спать, завтра на работу");
      break;
    default:
      alert("Мы не знаем что Вам делать");
      break;
  }