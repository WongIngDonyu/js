function subtract() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value)
    var secondNumber = parseFloat(document.getElementById("secondNumber").value)
    var result = firstNumber - secondNumber
    document.getElementById("result").innerText = "Result: " + result
}
subtract()
document.getElementById("firstNumber").addEventListener("input", subtract)
document.getElementById("secondNumber").addEventListener("input", subtract)