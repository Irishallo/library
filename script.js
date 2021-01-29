function add(a, b) {
  if(b == '') {
    document.getElementById('displaytext').textContent = "Nope, try again!";
    displayScreen = "";
  }  else {
  let add = a + b;
  document.getElementById('displaytext').textContent = add.toFixed(4); 
  displayScreen = add.toFixed(4); 
  return add;
}}

function substract(a, b) {
  if(b == '') {
    document.getElementById('displaytext').textContent = "Nope, try again!";
    displayScreen = "";
  }  else {
  let substract = a - b;
  document.getElementById('displaytext').textContent = substract.toFixed(4);
  displayScreen = substract.toFixed(4); 
  return substract;
}}

function multiply(a, b) {
  if(b == '') {
    document.getElementById('displaytext').textContent = "Nope, try again!";
    displayScreen = "";
  }  else {
  let multiply = a * b;
  displayScreen = multiply.toFixed(4);
  document.getElementById('displaytext').textContent = multiply.toFixed(4);  
  return multiply;
}}

function devide(a, b) {
  if(b == 0 || b == '') {
    document.getElementById('displaytext').textContent = "Nope, try again!";
    displayScreen = "";
  }  else {
    let devide = a / b;
    document.getElementById('displaytext').textContent = devide.toFixed(4);
    displayScreen = devide.toFixed(4);
    return devide;}
  
}

let displayScreen = "";

function showDisplay() {
  if(antwoordIs == '=' && (this.classList.contains('number') || this.classList.contains('period'))) {
    displayScreen = this.textContent;
    document.getElementById('displaytext').textContent = displayScreen;
    return;
  } else {
    displayScreen += this.textContent;
    document.getElementById('displaytext').textContent = displayScreen;
  }
 
}

let deel1 = "";
let op = '';
let deel2 = '';
let answerD1;
let antwoordIs = '';

function multiOperate() {
    if((this.classList.contains('number') || this.classList.contains('period')) && op == '' && antwoordIs == '=') {
        deel1 = this.textContent;
        antwoordIs = '';
        console.log(deel1);
        return;
  } else if((this.classList.contains('number') || this.classList.contains('period')) && op == '' && antwoordIs == '') {
      deel1 += this.textContent;
      console.log(deel1, op, deel2);
      return;
} else if(this.classList.contains('operator') && deel2 == '') {
      op = this.textContent;
      antwoordIs = '';
      console.log(deel1, op, deel2);
  } else if((this.classList.contains('number') || this.classList.contains('period')) && (op == '+' || op == '-' || op == 'x' || op == '/')) {
      deel2 += this.textContent;
      console.log(deel1, op, deel2);
  } else if(this.classList.contains('operator') && (op == '+' || op == '-' || op == 'x' || op == '/')) { 
      num1 = Number(deel1);
      num2 = Number(deel2);
      operator = op;
      switch(operator) {
        case '+':
          answerD1 = add(num1, num2);
          console.log(answerD1);
          deel1 = answerD1;
          op = this.textContent;
          deel2 = '';
          displayScreen += this.textContent;
          document.getElementById('displaytext').textContent = displayScreen;
          break;
        case '-':
          answerD1 = substract(num1, num2);
          console.log(answerD1);
          deel1 = answerD1;
          op = this.textContent;
          deel2 = '';
          displayScreen += this.textContent;
          document.getElementById('displaytext').textContent = displayScreen;
          break;
        case 'x':
          answerD1 = multiply(num1, num2);
          console.log(answerD1);
          deel1 = answerD1;
          op = this.textContent;
          deel2 = '';
          displayScreen += this.textContent;
          document.getElementById('displaytext').textContent = displayScreen;
          break;
        case '/':
          answerD1 = devide(num1, num2);
          console.log(answerD1);
          deel1 = answerD1;
          op = this.textContent;
          deel2 = '';
          displayScreen += this.textContent;
          document.getElementById('displaytext').textContent = displayScreen;
          break;  
        default:
          return 'something went wrong';
        }  
  } else if(this == answerButton) {
      num1 = Number(deel1);
      num2 = Number(deel2);
      operator = op;
  
      switch(operator) {
          case '+':
            answerD1 = add(num1, num2);
            console.log(answerD1);
            deel1 = answerD1;
            op = '';
            deel2 = '';
            antwoordIs = '=';
            document.getElementById('displaytext').textContent = displayScreen;
            break;
          case '-':
            answerD1 = substract(num1, num2);
            console.log(answerD1);
            deel1 = answerD1;
            op = '';
            deel2 = '';
            antwoordIs = '=';
            document.getElementById('displaytext').textContent = displayScreen;
            break;
          case 'x':
            answerD1 = multiply(num1, num2);
            console.log(answerD1);
            deel1 = answerD1;
            op = '';
            deel2 = '';
            antwoordIs = '=';
            document.getElementById('displaytext').textContent = displayScreen;
            break;
          case '/':
            answerD1 = devide(num1, num2);
            console.log(answerD1);
            deel1 = answerD1;
            op = '';
            deel2 = '';
            antwoordIs = '=';
            document.getElementById('displaytext').textContent = displayScreen;
            break;  
          default:
            return 'something went wrong';
        }
  } else {
    console.log('something went wrong');
  }
}

const periodBtn = document.getElementById('b.');
periodBtn.addEventListener('click', () => {
 displayScreen += periodBtn.textContent;
 document.getElementById('displaytext').textContent = displayScreen;
  periodBtn.disabled = true;
});
periodBtn.addEventListener('click', multiOperate);

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
  button.addEventListener('click', showDisplay);
  button.addEventListener('click', multiOperate);
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
  button.addEventListener('click', showDisplay);
  button.addEventListener('click', () => {
    periodBtn.disabled = false;
  });
  button.addEventListener('click', multiOperate);
});

const answerButton = document.getElementById('bis');
answerButton.addEventListener('click', multiOperate);

const clearButton = document.getElementById('bclear');
clearButton.addEventListener('click', () => {
  displayScreen = '';
  deel1 = "";
  op = '';
  deel2 = '';
  document.getElementById('displaytext').textContent = displayScreen;
  periodBtn.disabled = false;
})