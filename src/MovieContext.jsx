import React, {useState, createContext, useEffect} from 'react';
import { testMovieData } from './js/test-data';
import { fetchMovieDataById } from './js/fetch-data';

// This all allows us to store variables outside of components without having to pass a bunch of them
const MovieContext = createContext({});

const MovieProvider = ({children}) => {
    const [allMovieInfo, setAllMovieInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedAttributes, setSelectedAttributes] = useState([]);

    // when user unclicks an attribute, it will remove it from this list
    const removeFromAttributes = (itemToRemove) => {
        let newAttributes = [];
        for (const item of selectedAttributes) {
            if (item !== itemToRemove) {
                newAttributes.push(item);
            }
        }
        setSelectedAttributes(newAttributes);
    }

    // when a user clicks a new attribute, it will add it to the list
    const addToAttributes = (itemToAdd) => {
        if (!selectedAttributes.includes(itemToAdd)) {
            setSelectedAttributes([...selectedAttributes, itemToAdd]);
        }
    }

    // Fetch all of the movie data
    async function collectMovieData() {
        // first get the data from supabase - for now, use test data
        const moviesWithAttributes = testMovieData;

        let allMovies = [];

        // now loop through and start fetching data for each movie and then store them
        for (const movieInfo of moviesWithAttributes) {
            let newData = await fetchMovieDataById(movieInfo.id);
            if (newData !== null) { // a little error handling, does not add if movie did not load
                allMovies.push({
                    ...newData,
                    weather: movieInfo.weather,
                    mood: movieInfo.mood,
                    hobby: movieInfo.hobby,
                });
            } else {
                console.log("Error loading movie with ID:", movieInfo.id);
            }

        }

        console.log('all new movies: ', allMovies);
        setAllMovieInfo(allMovies);
        setIsLoading(false);

        // TO DO: Error handling
    }

    useEffect(() => {
        collectMovieData();
    }, []);

    return <MovieContext.Provider value={{
        allMovieInfo, isLoading, error,
        selectedAttributes, setSelectedAttributes,
        removeFromAttributes, addToAttributes
    }}>
        {children}
    </MovieContext.Provider>
}

export {MovieContext};
export default MovieProvider;