var a = ["ms/J.Fla - Feliz Navidad (mp3cut.net).mp3", "none"];
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
