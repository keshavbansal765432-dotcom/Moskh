// ====================
// FIRST SURPRISE
// ====================
const revealBtn = document.getElementById("revealBtn");
const hiddenMessage = document.getElementById("hiddenMessage");
const treeBtn = document.getElementById("treeBtn");
const bgm = document.getElementById("bgm");

// Play background music
bgm.volume = 0.3;

// Reveal hidden message

revealBtn.addEventListener("click", () => {
    hiddenMessage.style.display = "block";
    revealBtn.style.display = "none";
    treeBtn.style.display = "inline-block";
    bgm.play();
});


// ====================
// SECOND SURPRISE
// ====================
const treeScene = document.getElementById("treeScene");
const heart = document.getElementById("heart");
const photo = document.getElementById("photo");
const blessing = document.getElementById("blessing");

// 📸 Photos (h1.jpg → h27.jpg)
const photos = [];
for (let i = 1; i <= 13; i++) {
    photos.push(`/photos/h${i}.jpeg`);
}

// 💫 Blessings
const blessings = [
    "You are my today and all my tomorrows 💍",
    "In every chaos, I choose you 💗",
    "Our love is my safest place 🤍",
    "Still falling for you, every single day ✨",
    "Hand in hand, always 💞",
    "You and me, against the world 🌍",
    "This bond is my forever 🌸"
];

let index = 0;


// ====================
// START TREE SCENE
// ====================
treeBtn.addEventListener("click", () => {
    treeScene.style.display = "block";
    treeScene.style.opacity = "1";

    index = 0;

    photo.style.display = "block";
    photo.style.opacity = "0";

    blessing.style.opacity = "1";
    blessing.textContent = blessings[0];

    dropHeart();
});


// ====================
// HEART DROP LOOP
// ====================
function dropHeart() {
    if (index >= photos.length) {
        endScene();
        return;
    }

    // Reset heart animation
    heart.style.animation = "none";
    heart.style.opacity = "0";
    heart.offsetHeight;

    // Start falling
    heart.style.animation = "fallDown 1.2s ease forwards";
    heart.style.opacity = "1";

    // After heart lands
    setTimeout(() => {
        // PHOTO
        photo.src = photos[index];
        photo.style.opacity = "0";
        photo.offsetHeight;
        photo.style.opacity = "1";

        // BLESSING (fade change)
        blessing.style.opacity = "0";
        setTimeout(() => {
            blessing.textContent = blessings[index % blessings.length];
            blessing.style.opacity = "1";
        }, 400);

        index++;
    }, 1200);

    setTimeout(dropHeart, 2200);
}


// ====================
// END SCENE
// ====================
function endScene() {
    blessing.style.opacity = "0";
    setTimeout(() => {
        blessing.textContent = "Happy 11 month anniversary, Mansi 💖";
        blessing.style.opacity = "1";
    }, 600);

    setTimeout(() => {
        treeScene.style.transition = "opacity 2s ease";
        treeScene.style.opacity = "0";
    }, 2600);
}