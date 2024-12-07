// Data for movies and genres
const movies = {
    action: [
        { title: "Bade Miyan Chote Miyan", src: "clips/action/badeMiyanChoteMiyan.mp4", thumbnail: "images/thumbnails/action/badeMiyanChoteMiyan.jfif" },
        { title: "Canary Black", src: "clips/action/canaryBlack.mp4", thumbnail: "images/thumbnails/action/canaryBlack.jfif" },
        { title: "Avengers Endgame", src: "clips/action/endgame.mp4", thumbnail: "images/thumbnails/action/endgame.jfif" },
        { title: "Rebel Ridge", src: "clips/action/2.mp4", thumbnail: "images/thumbnails/action/rebelRidge.jpg" },
        { title: "Hit Man", src: "clips/action/2.mp4", thumbnail: "images/thumbnails/action/hitMan.webp" },
        { title: "The Union", src: "clips/action/2.mp4", thumbnail: "images/thumbnails/action/theUnion.jfif" },
    ],
    animation: [
        { title: "Despicable Me", src: "clips/animation/despicableMe4.mp4", thumbnail: "images/thumbnails/animation/dispicableMe4.jfif" },
        { title: "Hit Pig!", src: "clips/animation/hitPig!.mp4", thumbnail: "images/thumbnails/animation/hitPig!.jfif" },
        { title: "Kung-Fu Panda 4", src: "clips/animation/kungFuPanda4.mp4", thumbnail: "images/thumbnails/animation/kungFuPanda4.jfif" },
        { title: "Moana 2", src: "clips/animation/1.mp4", thumbnail: "images/thumbnails/animation/moana2.jfif" },
        { title: "Spell Bound", src: "clips/animation/5.mp4", thumbnail: "images/thumbnails/animation/spellbound.jfif" },
        { title: "The Wild Robot", src: "clips/animation/6.mp4", thumbnail: "images/thumbnails/animation/theWildRobots.jfif" },
    ],
    comedy: [
        { title: "Cocain Bear", src: "clips/comedy/cocaineBear.mp4", thumbnail: "images/thumbnails/comedy/cocainBear.jfif" },
        { title: "Deadpool & Wolverine", src: "clips/comedy/deadpoolAndWolverine.mp4", thumbnail: "images/thumbnails/comedy/deadpoolAndWolverine.jfif" },
        { title: "Dumb Money", src: "clips/comedy/dumbMoney.mp4", thumbnail: "images/thumbnails/comedy/dumbMoney.jfif" },
        { title: "Joy Ride", src: "clips/comedy/4.mp4", thumbnail: "images/thumbnails/comedy/joyRide.jfif" },
        { title: "No Hard Feelings", src: "clips/comedy/5.mp4", thumbnail: "images/thumbnails/comedy/noHardFeelings.jfif" },
        { title: "Poor Things", src: "clips/comedy/6.mp4", thumbnail: "images/thumbnails/comedy/poorThings.jfif" },
    ],
    drama: [
        { title: "A Family Affair", src: "clips/drama/aFamilyAffair.mp4", thumbnail: "images/thumbnails/drama/aFamilyAffair.jfif" },
        { title: "Challengers", src: "clips/drama/challengers.mp4", thumbnail: "images/thumbnails/drama/challengers.jfif" },
        { title: "Damaged", src: "clips/drama/damaged.mp4", thumbnail: "images/thumbnails/drama/damaged.jfif" },
        { title: "Sound Of Freedom", src: "clips/drama/4.mp4", thumbnail: "images/thumbnails/drama/soundOfFreedom.jfif" },
        { title: "The Tear Smith", src: "clips/drama/5.mp4", thumbnail: "images/thumbnails/drama/theTearsmith.jfif" },
        { title: "Upgraded", src: "clips/drama/6.mp4", thumbnail: "images/thumbnails/drama/upgraded.jfif" },
    ],
    horror: [
        { title: "Tarot", src: "clips/horror/tarot.mp4", thumbnail: "images/thumbnails/horror/tarot.jfif" },
        { title: "Don't Move", src: "clips/horror/dontMove.mp4", thumbnail: "images/thumbnails/horror/dontMove.jfif" },
        { title: "Nokturno", src: "clips/horror/nokturno.mp4", thumbnail: "images/thumbnails/horror/nokturno.jfif" },
        { title: "The Deliverance", src: "clips/horror/4.mp4", thumbnail: "images/thumbnails/horror/theDeliverance.jfif" },
        { title: "Time Cut", src: "clips/horror/5.mp4", thumbnail: "images/thumbnails/horror/timeCut.jfif" },
        { title: "Under Paris", src: "clips/horror/6.mp4", thumbnail: "images/thumbnails/horror/underParis.jfif" },
    ],
    scifi: [
        { title: "65", src: "clips/sci-fi/65.mp4", thumbnail: "images/thumbnails/sci-fi/65.jfif" },
        { title: "Foe", src: "clips/sci-fi/foe.mp4", thumbnail: "images/thumbnails/sci-fi/foe.jfif" },
        { title: "Hypnotic", src: "clips/sci-fi/hypnotic.mp4", thumbnail: "images/thumbnails/sci-fi/hypnotic.jfif" },
        { title: "Jung-E", src: "clips/sci-fi/2.mp4", thumbnail: "images/thumbnails/sci-fi/jung-e.jfif" },
        { title: "The Kitchen", src: "clips/sci-fi/2.mp4", thumbnail: "images/thumbnails/sci-fi/theKitchen.jfif" },
        { title: "They Cloned Tyrone", src: "clips/sci-fi/2.mp4", thumbnail: "images/thumbnails/sci-fi/theyClonedTyrone.jfif" },
    ],
};

// DOM Elements
const thumbnailGrid = document.getElementById("thumbnail-grid");
const moviePlayer = document.getElementById("movie-player");
const videoSource = document.getElementById("video-source");

// Load thumbnails for a specific genre
function loadThumbnails(genre) {
    thumbnailGrid.innerHTML = ""; // Clear existing thumbnails
    movies[genre].forEach(movie => {
        const thumbnailDiv = document.createElement("div");
        thumbnailDiv.classList.add("thumbnail");
        thumbnailDiv.innerHTML = `<img src="${movie.thumbnail}" alt="${movie.title}" title="${movie.title}">`;
        thumbnailDiv.addEventListener("click", () => {
            // Update video player with selected movie
            videoSource.src = movie.src;
            moviePlayer.load(); // Reload the video player with the new source
        });
        thumbnailGrid.appendChild(thumbnailDiv);
    });
}

// Genre button click events
document.querySelectorAll(".genre-btn").forEach(button => {
    button.addEventListener("click", () => {
        const genre = button.dataset.genre;
        loadThumbnails(genre);
    });
});

// Initial load (default to Action genre)
loadThumbnails("action");