console.log('JS OK')

// Variabili

var name = prompt('Scrivi qui il tuo nome');
var surname = prompt('Scrivi qui il tuo cognome');
var favouriteColor = prompt('Scrivi qui il tuo colore preferito');
var suggestedPassword = document.getElementById('suggested-password');
var passwordPlaceholder = name + surname + favouriteColor;

console.log('name:', name);
console.log('surname:', surname);
console.log('favouriteColor:', favouriteColor);
console.log(suggestedPassword);
console.log('passwordPlaceholder', passwordPlaceholder);

suggestedPassword.innerHTML = passwordPlaceholder + '21';
