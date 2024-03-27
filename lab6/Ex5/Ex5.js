function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        var searchField = document.getElementById('searchField').value.trim();
        var tableRows = document.querySelectorAll('table tbody tr');
        for (var i = 0; i < tableRows.length; i++) {
            var row = tableRows[i];
            var cells = row.querySelectorAll('td');
            var matchFound = false;
            for (var j = 0; j < cells.length; j++) {
                var cellText = cells[j].textContent.trim();
                if (cellText.includes(searchField)) {
                    matchFound = true;
                    break;
                }
            }
            if (matchFound) {
                row.classList.add('select');
            } else {
                row.classList.remove('select');
            }
        }
    }
}