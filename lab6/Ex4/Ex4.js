function search() {
    var searchText = document.getElementById("searchText").value.toLowerCase();
    var towns = document.querySelectorAll("#towns li");
    var count = 0;
    for (var town of towns) {
        var townText = town.textContent.toLowerCase();
        var townWords = townText.split(" ");
        var found = false;
        for (var word of townWords) {
            if (word.includes(searchText)) {
                found = true;
                break;
            }
        }
        if (found) {
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
            count++;
        } else {
            town.style.fontWeight = "normal";
            town.style.textDecoration = "none";
        }
    }
    document.getElementById("result").innerText = count + " matches found";
}
