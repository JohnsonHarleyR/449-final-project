
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1';

const movieApiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWVkOTg1OTE3NTc3MzBiMzMyODcxNDYzZTFiNWUzOCIsIm5iZiI6MTc0MzEwMDA5Ni42OTQwMDAyLCJzdWIiOiI2N2U1OThjMGU4YTE5MTBlNjUxMGMzYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BbsCCSrT-1XqR4-89t-xWgNndmH0FPded91HKBpzPwk";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhianFmY2hhZHR1anZ2eWdrcnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1OTc3MzYsImV4cCI6MjA1ODE3MzczNn0.28kUpBvmKOzrwaVpI9yA7EiqaexZic1erElczZRyPqg";

export async function fetchAllInitialMovieData(setData) {
  const supabaseUrl = 'https://xbjqfchadtujvvygkrui.supabase.co'
  const supabase = createClient(supabaseUrl, supabaseKey)

  let { data: movies, error } = await supabase
  .from('movies')
  .select('*')
  // TODO error handling
  if (error) {
    console.log('error: ', error);
  }
  let completedMovies = [];
  for (const movie of movies) {
    completedMovies.push({
      ...movie,
      image: `/movieImages/${movie.id}.png`
    });
  }
  setData(completedMovies);
}

export async function fetchMovieDataById(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const posterPath = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2";

    try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${movieApiToken}`
          }
        });
        const fetchedData = await response.json();
        // store all the data appropriately
        const data = {
            id: movieId,
            adult: fetchedData['adult'],
            title: fetchedData['title'],
            releaseDate: fetchedData['release_date'],
            tagline: fetchedData['tagline'],
            overview: fetchedData['overview'],
            genres: fetchedData['genres'],
            image: `${posterPath}${fetchedData["poster_path"]}`
        }
        return data;
      } catch (error) {
        console.log("Error in fetch: ", error);
        return null;
      }
}

export async function fetchAllMovieData(setData) {
  const moviesWithAttributes = await fetchAllInitialMovieData();
  let allMovies = [];

  for (const movieInfo of moviesWithAttributes) {
    let newData = await fetchMovieDataById(movieInfo.id);
    if (newData !== null) { // a little error handling, does not add if movie did not load
        allMovies.push({
            ...newData,
            weather: movieInfo.weather,
            mood: movieInfo.mood,
            interest: movieInfo.interest,
        });
    } else {
        console.log("Error loading movie with ID:", movieInfo.id);
    }

  }
  setData(allMovies);
}