const form = document.getElementById('name-form');
const input = document.getElementById('name-input');
const welcomeMessage = document.getElementById('welcome-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = input.ariaValueMax;
    welcomeMessage.textContent = 'welcome, ' + name + '!';
});