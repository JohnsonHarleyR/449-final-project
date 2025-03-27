
const movieApiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWVkOTg1OTE3NTc3MzBiMzMyODcxNDYzZTFiNWUzOCIsIm5iZiI6MTc0MzEwMDA5Ni42OTQwMDAyLCJzdWIiOiI2N2U1OThjMGU4YTE5MTBlNjUxMGMzYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BbsCCSrT-1XqR4-89t-xWgNndmH0FPded91HKBpzPwk";

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
        console.log('Data: ', data);
        return data;
      } catch (error) {
        console.log("Error in fetch: ", error);
        return null;
      }
}