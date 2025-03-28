import React, {useState, createContext, useEffect} from 'react';
import { fetchAllMovieData } from './js/fetch-data';

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

    useEffect(() => {
        fetchAllMovieData(setAllMovieInfo);
    }, []);

    useEffect(() => {
        
        if (allMovieInfo.length !== 0) {
            setIsLoading(false);
        }
    }, [allMovieInfo])

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