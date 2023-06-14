
function searchMovies(event) {
    event.preventDefault();
  
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.toLowerCase();
  
    const apiKey = "a47eced8"; // Reemplaza con tu clave de API de OMDB
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayResults(data.Search);
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
      });
  }
  
  function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    const container = document.createElement("div");
    container.classList.add("container-fluid", "pt-5");
    
  
    const row = document.createElement("div");
    row.classList.add("row");
  
    results.forEach(movie => {
      const col = document.createElement("div");
      col.classList.add("col-lg-2", "col-md-3", "col-sm-4");
  
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
  
      const imageElement = document.createElement("img");
      imageElement.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg";
      imageElement.classList.add("img-fluid", "imagen", "rounded");
      movieElement.appendChild(imageElement);
  
      const titleElement = document.createElement("h2");
      titleElement.textContent = movie.Title;
      movieElement.appendChild(titleElement);
      titleElement.classList.add("movie-title")
  
      movieElement.addEventListener("click", () => {
        viewMovieDetails(movie.imdbID); // Llama a la función viewMovieDetails con el ID de IMDb de la película
      });

      col.appendChild(movieElement);
      row.appendChild(col);
    });
  
    container.appendChild(row);
    resultsContainer.appendChild(container);
  }
  
function viewMovieDetails(movieId) {
  const apiKey = "a47eced8";
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Aquí puedes utilizar los datos de la película para mostrarlos en un modal, una nueva página, etc.
      console.log("Detalles de la película:", data);
    })
    .catch(error => {
      console.error("Error en la solicitud:", error);
    });
}


document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector("#carouselExampleFade");
  const carouselItems = carousel.querySelectorAll(".carousel-item");

  let currentItem = 0;

  function showSlide(index) {
    carouselItems.forEach(function(item, i) {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentItem++;
    if (currentItem >= carouselItems.length) {
      currentItem = 0;
    }
    showSlide(currentItem);
  }

  setInterval(nextSlide, 5000); // Cambiar cada 5 segundos (ajusta el intervalo según tus necesidades)
});

