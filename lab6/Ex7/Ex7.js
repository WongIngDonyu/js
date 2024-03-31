function lockedProfile() {
    var profiles = document.querySelectorAll('.profile')

    profiles.forEach(function(profile) {
        var showButton = profile.querySelector('button')
        var hiddenFields = profile.querySelector('div[id^="user"]')
        var lockRadio = profile.querySelector('input[type="radio"][value="lock"]')
        var unlockRadio = profile.querySelector('input[type="radio"][value="unlock"]')
        function handleShowMoreClick() {
            if (unlockRadio.checked) {
                if (hiddenFields.style.display === 'none') {
                    hiddenFields.style.display = 'block'
                    showButton.textContent = 'Hide it'
                } else {
                    hiddenFields.style.display = 'none'
                    showButton.textContent = 'Show more'
                }
            }
        }
        showButton.addEventListener('click', handleShowMoreClick)
        lockRadio.addEventListener('change', function() {
            if (lockRadio.checked) {
                showButton.removeEventListener('click', handleShowMoreClick)
                }
            }
        )

        unlockRadio.addEventListener('change', function() {
            if (unlockRadio.checked) {
                showButton.addEventListener('click', handleShowMoreClick)
                }
            }
        )
        }
    )
}
