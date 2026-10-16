
/* ==========================================
   1. DONNÉES DES FILMS
   Les affiches proviennent de TMDB.
   Les notes et synopsis sont des données
   de démonstration pour ce projet.
========================================== */

const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        genres: ["Science-fiction", "Action"],
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        synopsis: "Dom Cobb est un spécialiste de l'extraction : il vole les secrets enfouis dans les rêves. Une mission exceptionnelle lui demande cette fois d'implanter une idée dans l'esprit d'une personne. Pour réussir, il doit plonger dans plusieurs niveaux de rêves."
    },
    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        genres: ["Science-fiction", "Aventure", "Drame"],
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        synopsis: "Alors que la Terre devient de moins en moins habitable, une équipe d'explorateurs traverse un trou de ver pour chercher une nouvelle planète où l'humanité pourrait survivre. Cooper doit aussi faire face à la distance qui le sépare de sa famille."
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Drame", "Thriller"],
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        synopsis: "Batman, le lieutenant Gordon et le procureur Harvey Dent tentent de protéger Gotham City. Leur combat prend une tournure dangereuse lorsqu'un criminel imprévisible, le Joker, plonge la ville dans le chaos."
    },
    {
        id: 4,
        title: "Dune",
        year: 2021,
        genres: ["Science-fiction", "Aventure", "Action"],
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        synopsis: "Paul Atréides accompagne sa famille sur Arrakis, une planète désertique qui abrite la ressource la plus précieuse de l'univers. Entre rivalités politiques, prophéties et dangers, son destin prend une tournure inattendue."
    },
    {
        id: 5,
        title: "Parasite",
        year: 2019,
        genres: ["Thriller", "Drame"],
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        synopsis: "Une famille vivant dans un logement modeste trouve progressivement sa place auprès d'une famille très riche. Mais derrière cette nouvelle situation se cachent des tensions et des secrets qui vont bouleverser la vie des deux familles."
    },
    {
        id: 6,
        title: "Matrix",
        year: 1999,
        genres: ["Science-fiction", "Action"],
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        synopsis: "Neo, un programmeur qui doute de la réalité qui l'entoure, découvre l'existence de la Matrice. Guidé par Morpheus et Trinity, il doit choisir entre rester dans son monde familier et découvrir la vérité."
    },
    {
        id: 7,
        title: "Spider-Man: New Generation",
        year: 2018,
        genres: ["Animation", "Action", "Aventure"],
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        synopsis: "Miles Morales, un adolescent de Brooklyn, découvre ses pouvoirs de Spider-Man. Une expérience bouleverse les dimensions et lui permet de rencontrer plusieurs versions du héros. Ensemble, ils doivent tenter de sauver leurs univers."
    },
    {
        id: 8,
        title: "Toy Story",
        year: 1995,
        genres: ["Animation", "Aventure"],
        rating: 8.3,
        poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        synopsis: "Woody, le jouet préféré d'Andy, voit son quotidien bouleversé par l'arrivée de Buzz l'Éclair. Une rivalité s'installe entre les deux jouets, qui devront finalement apprendre à collaborer pour retrouver leur maison."
    },
    {
        id: 9,
        title: "Avatar",
        year: 2009,
        genres: ["Science-fiction", "Action", "Aventure"],
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        synopsis: "Jake Sully arrive sur Pandora, un monde extraordinaire habité par les Na'vi. Grâce à un avatar, il apprend à connaître leur culture et se retrouve partagé entre sa mission initiale et la protection de cette planète."
    },
    {
        id: 10,
        title: "Coco",
        year: 2017,
        genres: ["Animation", "Aventure", "Drame"],
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        synopsis: "Miguel rêve de devenir musicien malgré l'interdiction de la musique dans sa famille. Le jour de la Fête des morts, il se retrouve dans un monde étonnant où il découvre l'histoire de ses ancêtres et l'importance de la mémoire familiale."
    }
];


/* ==========================================
   2. RÉCUPÉRER LES ÉLÉMENTS HTML
========================================== */

const movieGrid = document.getElementById("movie-grid");
const searchInput = document.getElementById("search-input");
const genreFilters = document.getElementById("genre-filters");
const movieCounter = document.getElementById("movie-counter");
const emptyState = document.getElementById("empty-state");
const resetButton = document.getElementById("reset-button");

const movieModal = document.getElementById("movie-modal");
const modalClose = document.getElementById("modal-close");
const modalDone = document.getElementById("modal-done");
const modalPoster = document.getElementById("modal-poster");
const modalTitle = document.getElementById("modal-title");
const modalMeta = document.getElementById("modal-meta");
const modalSynopsis = document.getElementById("modal-synopsis");


/* ==========================================
   3. VARIABLES DE FILTRAGE
========================================== */

// Par défaut, tous les genres sont affichés.
let selectedGenre = "Tous";

// Mémoriser l'élément qui avait le focus avant la modale.
let previousFocus = null;


/* ==========================================
   4. CRÉER LES BOUTONS DE GENRE
========================================== */

function createGenreFilters() {
    // Récupérer tous les genres sans doublons.
    const genres = [
        "Tous",
        ...new Set(movies.flatMap(movie => movie.genres))
    ];

    genres.forEach(genre => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "genre-button";
        button.textContent = genre;
        button.dataset.genre = genre;

        if (genre === selectedGenre) {
            button.classList.add("active");
        }

        button.setAttribute(
            "aria-pressed",
            String(genre === selectedGenre)
        );

        button.addEventListener("click", function() {
            selectedGenre = genre;

            // Mettre à jour le bouton actif.
            document.querySelectorAll(".genre-button").forEach(btn => {
                const isActive = btn.dataset.genre === selectedGenre;

                btn.classList.toggle("active", isActive);
                btn.setAttribute("aria-pressed", String(isActive));
            });

            displayMovies();
        });

        genreFilters.appendChild(button);
    });
}


/* ==========================================
   5. AFFICHER LES CARTES DE FILMS
========================================== */

function displayMovies() {
    // Lire la recherche et ignorer les différences de casse.
    const searchText = searchInput.value.trim().toLocaleLowerCase("fr");

    // Filtrer les films par titre et par genre.
    const filteredMovies = movies.filter(movie => {
        const matchesTitle = movie.title
            .toLocaleLowerCase("fr")
            .includes(searchText);

        const matchesGenre =
            selectedGenre === "Tous" ||
            movie.genres.includes(selectedGenre);

        return matchesTitle && matchesGenre;
    });

    // Vider les anciennes cartes.
    movieGrid.replaceChildren();

    // Mettre à jour le nombre de résultats.
    movieCounter.textContent =
        `${filteredMovies.length} film${filteredMovies.length > 1 ? "s" : ""}`;

    // Afficher le message si aucun film ne correspond.
    emptyState.hidden = filteredMovies.length !== 0;

    // Créer une carte pour chaque résultat.
    filteredMovies.forEach(movie => {
        const card = document.createElement("article");
        card.className = "movie-card";

        // Zone de l'affiche.
        const posterWrapper = document.createElement("div");
        posterWrapper.className = "movie-poster";
        posterWrapper.dataset.title = movie.title;

        const poster = document.createElement("img");
        poster.src = movie.poster;
        poster.alt = `Affiche du film ${movie.title}`;
        poster.loading = "lazy";
        poster.decoding = "async";

        // Afficher un fond de remplacement si l'affiche échoue.
        poster.addEventListener("error", function() {
            poster.remove();
            posterWrapper.classList.add("poster-fallback");
        }, { once: true });

        // Note du film.
        const rating = document.createElement("span");
        rating.className = "rating-badge";
        rating.textContent = `★ ${movie.rating.toFixed(1)}`;

        posterWrapper.append(poster, rating);

        // Informations du film.
        const info = document.createElement("div");
        info.className = "movie-info";

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const meta = document.createElement("div");
        meta.className = "movie-meta";

        const year = document.createElement("span");
        year.textContent = movie.year;

        const separator = document.createElement("span");
        separator.className = "meta-dot";
        separator.textContent = "•";

        const genre = document.createElement("span");
        genre.className = "movie-genre";
        genre.textContent = movie.genres[0];

        meta.append(year, separator, genre);

        // Bouton ouvrant la fenêtre de détails.
        const detailsButton = document.createElement("button");
        detailsButton.type = "button";
        detailsButton.className = "details-button";
        detailsButton.textContent = "Voir les détails";
        detailsButton.setAttribute(
            "aria-label",
            `Voir les détails de ${movie.title}`
        );

        detailsButton.addEventListener("click", function() {
            openMovieDetails(movie, detailsButton);
        });

        info.append(title, meta, detailsButton);
        card.append(posterWrapper, info);
        movieGrid.appendChild(card);
    });
}


/* ==========================================
   6. OUVRIR LA FENÊTRE DES DÉTAILS
========================================== */

function openMovieDetails(movie, triggerButton) {
    // Mémoriser le bouton pour y revenir après fermeture.
    previousFocus = triggerButton;

    // Remplir les informations du film.
    modalTitle.textContent = movie.title;
    modalPoster.src = movie.poster;
    modalPoster.alt = `Affiche du film ${movie.title}`;
    modalSynopsis.textContent = movie.synopsis;

    // Créer les informations de la fiche.
    modalMeta.replaceChildren();

    const year = document.createElement("span");
    year.textContent = movie.year;

    const genre = document.createElement("span");
    genre.textContent = movie.genres.join(" · ");

    const rating = document.createElement("span");
    rating.className = "modal-rating";
    rating.textContent = `★ ${movie.rating.toFixed(1)} / 10`;

    modalMeta.append(year, genre, rating);

    // Gérer également l'erreur de chargement de l'affiche modale.
    modalPoster.style.display = "block";

    modalPoster.onerror = function() {
        modalPoster.style.display = "none";
    };

    // Afficher la modale et empêcher le défilement de l'arrière-plan.
    movieModal.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
}


/* ==========================================
   7. FERMER LA FENÊTRE DES DÉTAILS
========================================== */

function closeMovieDetails() {
    movieModal.hidden = true;
    document.body.style.overflow = "";

    // Rendre le focus au bouton utilisé précédemment.
    if (previousFocus) {
        previousFocus.focus();
    }
}

// Fermer avec la croix.
modalClose.addEventListener("click", closeMovieDetails);

// Fermer avec le bouton de retour.
modalDone.addEventListener("click", closeMovieDetails);

// Fermer en cliquant sur l'arrière-plan.
movieModal.addEventListener("click", function(event) {
    if (event.target === movieModal) {
        closeMovieDetails();
    }
});

// Fermer avec la touche Échap.
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && !movieModal.hidden) {
        closeMovieDetails();
    }
});


/* ==========================================
   8. RECHERCHE ET RÉINITIALISATION
========================================== */

// Actualiser les résultats pendant la saisie.
searchInput.addEventListener("input", displayMovies);

// Réinitialiser la recherche et le genre.
resetButton.addEventListener("click", function() {
    searchInput.value = "";
    selectedGenre = "Tous";

    document.querySelectorAll(".genre-button").forEach(button => {
        const isActive = button.dataset.genre === "Tous";

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    displayMovies();
});


/* ==========================================
   9. INITIALISATION DE L'APPLICATION
========================================== */

// Afficher automatiquement l'année actuelle dans le pied de page.
document.getElementById("current-year").textContent =
    new Date().getFullYear();

// Créer les filtres, puis afficher les dix films.
createGenreFilters();
displayMovies();
