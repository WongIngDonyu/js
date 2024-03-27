function toggle() {
    var extraContent = document.getElementById("extra")
    var button = document.querySelector(".button")//получение ссылки первой кнопки на странице
    if (extraContent.style.display === "block") {
        extraContent.style.display = "none"
        button.innerText = "More"
    } else {
        extraContent.style.display = "block"
        button.innerText = "Less"
    }
}
