export function checkToBeTruthy() {
  if ("0") {
    alert("Привет");
  }
}

export function whatOfficialNameJS() {
  let input = prompt("Какое «официальное» название JavaScript?");

  if (input === "ECMAScript") {
    alert("Верно!");
  } else {
    alert("Не знаете? ECMAScript!");
  }
}

export function getNumber() {
  let input = +prompt("Введите любое число");
  if (input > 0) {
    alert(1);
  } else if (input < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}
