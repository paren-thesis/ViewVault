// Data for movies and genres
const movies = {
    action: [
        { title: "Bade Miyan Chote", src: "../clips/action/1.mp4", thumbnail: "../images/thumbnails/action/badeMiyanChoteMiyan.jfif" },
        { title: "Canary Black", src: "../clips/action/2.mp4", thumbnail: "../images/thumbnails/action/canaryBlack.jfif" },
        { title: "Avengers Endgame", src: "../clips/action/2.mp4", thumbnail: "../images/thumbnails/action/endgame.jfif" },
        { title: "Rebel Ridge", src: "../clips/action/2.mp4", thumbnail: "../images/thumbnails/action/rebelRidge.jpg" },
        { title: "The Union", src: "../clips/action/2.mp4", thumbnail: "../images/thumbnails/action/theUnion.jfif" }
    ],
    adventure: [
        { title: "Indiana Jones", src: "../clips/adventure/indianajones.mp4", thumbnail: "../images/thumbnails/adventure/indianajones.jpg" },
        { title: "Jumanji", src: "../clips/adventure/jumanji.mp4", thumbnail: "../images/thumbnails/adventure/jumanji.jpg" },
    ],
    comedy: [
        { title: "Superbad", src: "../clips/comedy/superbad.mp4", thumbnail: "../images/thumbnails/comedy/superbad.jpg" },
        { title: "Step Brothers", src: "../clips/comedy/stepbrothers.mp4", thumbnail: "../images/thumbnails/comedy/stepbrothers.jpg" },
    ],
    drama: [
        { title: "The Godfather", src: "../clips/drama/godfather.mp4", thumbnail: "../images/thumbnails/drama/godfather.jpg" },
        { title: "Forrest Gump", src: "../clips/drama/forrestgump.mp4", thumbnail: "../images/thumbnails/drama/forrestgump.jpg" },
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