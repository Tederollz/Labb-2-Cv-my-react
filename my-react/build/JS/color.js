// Hämta knappen för "Hem"
var homeLink = document.getElementById('home-link');

// Lägg till en klicklyssnare på knappen
homeLink.addEventListener('click', function(event) {
    changeBackgroundColor();
});

// Funktion för att ändra bakgrundsfärgen
function changeBackgroundColor() {
    // Generera slumpmässiga RGB-värden för bakgrundsfärgen
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    // Tilldela den slumpmässiga färgen till bakgrundsfärgen för body-elementet
    document.body.style.backgroundColor = randomColor;
}