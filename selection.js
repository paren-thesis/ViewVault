// Data for movies and genres
const movies = {
    action: [
        { title: "Bade Miyan Chote Miyan", src: "https://www.youtube.com/embed/IGzLHNPO4QI", thumbnail: "images/thumbnails/action/badeMiyanChoteMiyan.jfif" },
        { title: "Canary Black", src: "https://www.youtube.com/embed/tSaw2HTVSsA", thumbnail: "images/thumbnails/action/canaryBlack.jfif" },
        { title: "Avengers Endgame", src: "https://www.youtube.com/embed/TcMBFSGVi1c", thumbnail: "images/thumbnails/action/endgame.jfif" },
        { title: "Rebel Ridge", src: "https://www.youtube.com/embed/gF3gZicntIw", thumbnail: "images/thumbnails/action/rebelRidge.jpg" },
        { title: "Hit Man", src: "https://www.youtube.com/embed/AtX8wGNwyZ8", thumbnail: "images/thumbnails/action/hitMan.webp" },
        { title: "The Union", src: "https://www.youtube.com/embed/vea9SdnRMyg", thumbnail: "images/thumbnails/action/theUnion.jfif" },
    ],
    animation: [
        { title: "Despicable Me 4", src: "https://www.youtube.com/embed/qQlr9-rF32A", thumbnail: "images/thumbnails/animation/dispicableMe4.jfif" },
        { title: "Hit Pig!", src: "https://www.youtube.com/embed/I_MrnmtXCMc", thumbnail: "images/thumbnails/animation/hitPig!.jfif" },
        { title: "Kung-Fu Panda 4", src: "https://www.youtube.com/embed/_inKs4eeHiI", thumbnail: "images/thumbnails/animation/kungFuPanda4.jfif" },
        { title: "Moana 2", src: "https://www.youtube.com/embed/hDZ7y8RP5HE", thumbnail: "images/thumbnails/animation/moana2.jfif" },
        { title: "Spell Bound", src: "https://www.youtube.com/embed/jGQiq1ZuCW8", thumbnail: "images/thumbnails/animation/spellbound.jfif" },
        { title: "The Wild Robot", src: "https://www.youtube.com/embed/67vbA5ZJdKQ", thumbnail: "images/thumbnails/animation/theWildRobots.jfif" },
    ],
    comedy: [
        { title: "Cocaine Bear", src: "https://www.youtube.com/embed/DuWEEKeJLMI", thumbnail: "images/thumbnails/comedy/cocainBear.jfif" },
        { title: "Deadpool & Wolverine", src: "https://www.youtube.com/embed/73_1biulkYk", thumbnail: "images/thumbnails/comedy/deadpoolAndWolverine.jfif" },
        { title: "Dumb Money", src: "https://www.youtube.com/embed/bmr8YmwnZ3w", thumbnail: "images/thumbnails/comedy/dumbMoney.jfif" },
        { title: "Joy Ride", src: "https://www.youtube.com/embed/jyI-AM5VXDo", thumbnail: "images/thumbnails/comedy/joyRide.jfif" },
        { title: "No Hard Feelings", src: "https://www.youtube.com/embed/P15S6ND8kbQ", thumbnail: "images/thumbnails/comedy/noHardFeelings.jfif" },
        { title: "Poor Things", src: "https://www.youtube.com/embed/S5KiC0GgED0", thumbnail: "images/thumbnails/comedy/poorThings.jfif" },
    ],
    drama: [
        { title: "A Family Affair", src: "https://www.youtube.com/embed/Ytc2eifpiuQ", thumbnail: "images/thumbnails/drama/aFamilyAffair.jfif" },
        { title: "Challengers", src: "https://www.youtube.com/embed/VobTTbg-te0", thumbnail: "images/thumbnails/drama/challengers.jfif" },
        { title: "Damaged", src: "https://www.youtube.com/embed/Sg8NuJL5P_8", thumbnail: "images/thumbnails/drama/damaged.jfif" },
        { title: "Sound Of Freedom", src: "https://www.youtube.com/embed/Rt0kp4VW1cI", thumbnail: "images/thumbnails/drama/soundOfFreedom.jfif" },
        { title: "The Tear Smith", src: "https://www.youtube.com/embed/qEh_90RnlD8", thumbnail: "images/thumbnails/drama/theTearsmith.jfif" },
        { title: "Upgraded", src: "https://www.youtube.com/embed/P3_dj7BnHp8", thumbnail: "images/thumbnails/drama/upgraded.jfif" },
    ],
    horror: [
        { title: "Tarot", src: "https://www.youtube.com/embed/bvDArsKoTOE", thumbnail: "images/thumbnails/horror/tarot.jfif" },
        { title: "Don't Move", src: "https://www.youtube.com/embed/YjTZMEbpKsc", thumbnail: "images/thumbnails/horror/dontMove.jfif" },
        { title: "Nokturno", src: "https://www.youtube.com/embed/5t17b3XrRCY", thumbnail: "images/thumbnails/horror/nokturno.jfif" },
        { title: "The Deliverance", src: "https://www.youtube.com/embed/PDcDagDcwPA", thumbnail: "images/thumbnails/horror/theDeliverance.jfif" },
        { title: "Time Cut", src: "https://www.youtube.com/embed/XEfr1x27TR4", thumbnail: "images/thumbnails/horror/timeCut.jfif" },
        { title: "Under Paris", src: "https://www.youtube.com/embed/jnCefPQIH98", thumbnail: "images/thumbnails/horror/underParis.jfif" },
    ],
    scifi: [
        { title: "65", src: "https://www.youtube.com/embed/bHXejJq5vr0", thumbnail: "images/thumbnails/sci-fi/65.jfif" },
        { title: "Foe", src: "https://www.youtube.com/embed/bHXejJq5vr0", thumbnail: "images/thumbnails/sci-fi/foe.jfif" },
        { title: "Hypnotic", src: "https://www.youtube.com/embed/eHsWYmnXk1o&pp=0gcJCdgAo7VqN5tD", thumbnail: "images/thumbnails/sci-fi/hypnotic.jfif" },
        { title: "Jung-E", src: "https://www.youtube.com/embed/LCxnmfdxJ6s", thumbnail: "images/thumbnails/sci-fi/jung-e.jfif" },
        { title: "The Kitchen", src: "https://www.youtube.com/embed/GgT5cEV5Qt0", thumbnail: "images/thumbnails/sci-fi/theKitchen.jfif" },
        { title: "They Cloned Tyrone", src: "https://www.youtube.com/embed/2S3M1xFVdVg", thumbnail: "images/thumbnails/sci-fi/theyClonedTyrone.jfif" },
    ],
};

// DOM Elements
const thumbnailGrid = document.getElementById("thumbnail-grid");
const moviePlayer = document.getElementById("movie-player");

// Load thumbnails for a specific genre
function loadThumbnails(genre) {
    thumbnailGrid.style.opacity = '0';
    setTimeout(() => {
        thumbnailGrid.innerHTML = ""; // Clear existing thumbnails
        movies[genre].forEach(movie => {
            const thumbnailDiv = document.createElement("div");
            thumbnailDiv.classList.add("thumbnail");
            thumbnailDiv.innerHTML = `<img src="${movie.thumbnail}" alt="${movie.title}" title="${movie.title}">`;
            thumbnailDiv.addEventListener("click", () => {
                // Update iframe source with YouTube video
                moviePlayer.src = movie.src;
            });
            thumbnailGrid.appendChild(thumbnailDiv);
        });
        thumbnailGrid.style.opacity = '1';
    }, 300); // Short delay to ensure smooth transition
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