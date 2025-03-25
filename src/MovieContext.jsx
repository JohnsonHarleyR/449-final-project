import React, {useState, createContext, useEffect} from 'react';

// This all allows us to store variables outside of components without having to pass a bunch of them
const MovieContext = createContext({});

const MovieProvider = ({children}) => {
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

    return <MovieContext.Provider value={{
        selectedAttributes, setSelectedAttributes,
        removeFromAttributes, addToAttributes
    }}>
        {children}
    </MovieContext.Provider>
}

export {MovieContext};
export default MovieProvider;