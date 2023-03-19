alert('Task 6');

let total = 0;
let input;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) {
    break; 
  }

  input = Number(input);

  if (isNaN(input)) {
    alert("Було введено не число, спробуйте ще раз.");
    continue; 
  }

  total += input;
}

alert(`Загальна сума чисел дорівнює ${total}`);