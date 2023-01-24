// salutation 
const salutationLabel = document.querySelector('.salutation');

// settings button
const settings = document.querySelector('.settings');

// toggling the settings page into view
const settingsPage = document.querySelector('.settings-page');
settings.addEventListener('click', () => {
    settingsPage.classList.toggle('active-page');
    settings.classList.toggle('active');
    salutationLabel.classList.toggle('invisible');
});


