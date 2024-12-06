var a = ["ms/Royal & the Serpent - “Wasteland” (from Arcane Season 2) [Official Music Video].mp3", "ms/Stray Kids, Young Miko, Tom Morello - _Come Play_ (from Arcane Season 2) [Official Visualizer].mp3", "ms/Stromae, Pomme - “Ma Meilleure Ennemie” (from Arcane Season 2) [Official Visualizer].mp3"];
var counter = 0;
const audio = document.getElementById('theme-music');
window.onload = function() {
    console.log('music loaded');
    changeMusic();
};
function changeMusic() {
    audio.src = a[counter];
    counter = (counter + 1) % a.length;
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}
