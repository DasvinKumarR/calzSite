window.onload = () => {
    let button = document.querySelector(".calBtn");
    button.addEventListener("click", calculator);
};

function calculator() {
    let number1 = (document.querySelector(".num1").value);
    let number2 = (document.querySelector(".num2").value);
    let result = document.querySelector(".resultValue");
    let operat = document.querySelector("#operator");
    let operatValue = operat.value;

    console.log(operatValue);
    if(operatValue === "addition") {
        result.innerHTML = number1 + number2;
    }
    else if(operatValue === "subtraction") {
        result.innerHTML = number1 - number2;
    }
    else if(operatValue === "multiply") {
        result.innerHTML = number1 * number2;
    }
    else {
        result.innerHTML = number1 / number2;
    }
}