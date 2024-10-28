// Image Flipper 

const photo = ["christ.jpg","colosseum.jpg","elephant.jpg","cheetah.jpg","Everest.jpg","horse.jpg"];

function change() {
    let random = Math.floor(Math.random()*photo.length);
    console.log(photo[random]);
    return photo[random];
}

function action() {
    let repeat = document.getElementById('image');
    repeat.style.background = `url(./images/${change()})`;
    repeat.style.backgroundSize = `cover`;
} 