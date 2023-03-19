alert('Task 3');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let resultChoise = prompt('Введіть пароль:');

if(!resultChoise){
    message='Відмінено користувачем!';
}
else if(resultChoise===ADMIN_PASSWORD){
    message='Ласкаво просимо!';
}
else{
    message='Доступ заборонений, невірний пароль!';
}

alert(message);