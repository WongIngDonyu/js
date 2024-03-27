function search() {
    var searchText = document.getElementById("searchText").value
    var towns = document.querySelectorAll("#towns li")
    var count = 0;
    for (var town of towns) {
        var townText = town.textContent
        var townWords = townText.split(" ");
        for (var word of searchText.split(" ")) {
            if (townWords.includes(word)) {
                town.style.fontWeight = "bold"
                town.style.textDecoration = "underline"
                count++
            } else {
                town.style.fontWeight = "normal"
                town.style.textDecoration = "none"
            }
        }
    }
    document.getElementById("result").innerText = count + " matches found"
}
