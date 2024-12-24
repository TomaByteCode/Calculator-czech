let result

document.getElementById("plus").onclick = function(){
    let firstNumber = document.getElementById("firstNumber").value
    firstNumber = Number(firstNumber)

    let secondNumber = document.getElementById("secondNumber").value
    secondNumber = Number(secondNumber)

    result = firstNumber + secondNumber;
    document.getElementById("result").textContent = "výsledek je: " + result;
}

document.getElementById("minus").onclick = function(){
    let firstNumber = document.getElementById("firstNumber").value
    firstNumber = Number(firstNumber)

    let secondNumber = document.getElementById("secondNumber").value
    secondNumber = Number(secondNumber)

    result = firstNumber - secondNumber;
    document.getElementById("result").textContent = "výsledek je: " + result;
}

document.getElementById("multiply").onclick = function(){
    let firstNumber = document.getElementById("firstNumber").value
    firstNumber = Number(firstNumber)

    let secondNumber = document.getElementById("secondNumber").value
    secondNumber = Number(secondNumber)

    result = firstNumber * secondNumber;
    document.getElementById("result").textContent = "výsledek je: " + result;
}

document.getElementById("divade").onclick = function(){
    let firstNumber = document.getElementById("firstNumber").value
    firstNumber = Number(firstNumber)

    let secondNumber = document.getElementById("secondNumber").value
    secondNumber = Number(secondNumber)

    result = firstNumber / secondNumber;
    document.getElementById("result").textContent = "výsledek je: " + result;
}