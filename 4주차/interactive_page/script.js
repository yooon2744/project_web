const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const resultText = document.querySelector("#result");

const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");

function getNumbers() {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  return { firstNumber, secondNumber };
}

function showResult(resultValue) {
  resultText.textContent = resultValue;
}

addButton.addEventListener("click", function () {
  const numbers = getNumbers();
  // first + second 더한 결과 코드 작성 
  const result = numbers.firstNumber + numbers.secondNumber;
  showResult(result);
});

subtractButton.addEventListener("click", function () {
  const numbers = getNumbers();
  // first - second 뺀 결과 코드 작성
  const result = numbers.firstNumber - numbers.secondNumber;
  showResult(result);
});

multiplyButton.addEventListener("click", function () {
  const numbers = getNumbers();
  // first * second 곱 결과 코드 작성
  const result = numbers.firstNumber * numbers.secondNumber;
  showResult(result);
});

divideButton.addEventListener("click", function () {
  const numbers = getNumbers();

// if 조건문으로 함수 진행 코드, 0이면 0으로 나눌 수 없다

// [조건문(if)을 사용 이유]
// 1. 수학,공학적으로 불가능한 상황을 감지하고 예방하기 위한 방어막 역할
// 2. 갈림길 역할

  if (numbers.secondNumber === 0) { 
    showResult("0으로 나눌 수 없습니다.");
    return;
  }
  // first / second 나누기 결과 코드 작성
  const result = numbers.firstNumber / numbers.secondNumber;
  showResult(result);


  // c 초기화 버튼 제작 코드
  const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", function () {
  firstNumberInput.value = "";
  secondNumberInput.value = "";
  resultText.textContent = ""; 
});
});
