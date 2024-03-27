function attachEventsListeners() {
    var daysBtn = document.getElementById('daysBtn')
    var hoursBtn = document.getElementById('hoursBtn')
    var minutesBtn = document.getElementById('minutesBtn')
    var secondsBtn = document.getElementById('secondsBtn')
    daysBtn.addEventListener('click', function() {
        var inputValue = parseFloat(document.getElementById('days').value)
            document.getElementById('hours').value = inputValue * 24
            document.getElementById('minutes').value = inputValue * 24 * 60
            document.getElementById('seconds').value = inputValue * 24 * 60 * 60

        }
    )

    hoursBtn.addEventListener('click', function() {
        var inputValue = parseFloat(document.getElementById('hours').value)
            document.getElementById('days').value = inputValue / 24
            document.getElementById('minutes').value = inputValue * 60
            document.getElementById('seconds').value = inputValue * 60 * 60
        }
    )

    minutesBtn.addEventListener('click', function() {
        var inputValue = parseFloat(document.getElementById('minutes').value);
            document.getElementById('days').value = inputValue / (24 * 60)
            document.getElementById('hours').value = inputValue / 60
            document.getElementById('seconds').value = inputValue * 60
        }
    )

    secondsBtn.addEventListener('click', function() {
        var inputValue = parseFloat(document.getElementById('seconds').value)
            document.getElementById('days').value = inputValue / (24 * 60 * 60)
            document.getElementById('hours').value = inputValue / (60 * 60)
            document.getElementById('minutes').value = inputValue / 60
        }
    )
}