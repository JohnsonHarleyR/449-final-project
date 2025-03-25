import { useState, useContext } from 'react'
import { MovieContext } from '../MovieContext';
import '../App.css'
import Selector from './Selector';
import { testMovieData } from '../js/test-data';

// This will allow us to select an attribute and allow us to select more than one
const ChooseMovie = ({}) => {

    const [chosenMovie, setChosenMovie] = useState(null);
    const {selectedAttributes} = useContext(MovieContext);

    const grabPossibleAttributes = (attrName) => {
        let newList = [];
        for (const movie of testMovieData) {
            let newAttr = movie[attrName];
            if (!newList.includes(newAttr)) {
                newList.push(newAttr);
            }
        }
        return newList;
    }

    const [moods, setMoods] = useState(grabPossibleAttributes("mood"));
    const [weather, setWeather] = useState(grabPossibleAttributes("weather"));
    const [hobbies, setHobbies] = useState(grabPossibleAttributes("hobby"));
    const attributeTypes = ["mood", "weather", "hobby"];

    // For now, this uses the testing data until we get the database set up
    const determineMovie = () => {
        let bestMovieMatches = [];
        let highestMatchCount = 0;
        // loop through all movies to find one with most matches
        for (const movie of testMovieData) {
            let matchCount = 0;
            // go through attributes in the movie to see how many of them the user selected
            for (const prop of attributeTypes) {
                if (selectedAttributes.includes(movie[prop])) {
                    matchCount++;
                }
            }
            // if the match is higher than previous counts, make it the new match
            if (matchCount > highestMatchCount) {
                bestMovieMatches = [movie];
                highestMatchCount = matchCount;
            } else if (highestMatchCount !== 0 && matchCount === highestMatchCount) {
                bestMovieMatches.push(movie);
            }
        }

        // set the selected movie - set to null if nothing was chosen
        if (bestMovieMatches.length === 0) {
            setChosenMovie(null);
        } else {
            let randomPick = Math.floor(Math.random() * bestMovieMatches.length);
            setChosenMovie(bestMovieMatches[randomPick])
        }
    }

    // All the different attributes will be mapped, in order for a user to select or deselect one
    return (
        <>
        <div className='choose-movie'>
            {moods.map((item, index) => (
                <Selector key={"mood" + index} attribute={item} />
            ))}
            {weather.map((item, index) => (
                <Selector key={"weather" + index} attribute={item} />
            ))}
            {hobbies.map((item, index) => (
                <Selector key={"hobby" + index} attribute={item} />
            ))}
        </div>
        <div>
            <button className='choose-movie-btn' onClick={determineMovie}>Pick Movie</button>
            {chosenMovie !== null ? <p>{chosenMovie.name} by {chosenMovie.director}</p> : <p>No Matches Yet</p>}
        </div>
        </>
        
    );
}

export default ChooseMovie;