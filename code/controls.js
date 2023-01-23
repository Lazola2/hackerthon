
const settings = document.querySelector('.settings');
const settingsPage = document.querySelector('.settings-page');
settings.addEventListener('click', () => {
    settingsPage.classList.toggle('active-page');
    settings.classList.toggle('active')

});