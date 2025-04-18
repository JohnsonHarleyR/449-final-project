import { useState, useContext, useEffect } from 'react'
import { MovieContext } from '../MovieContext';
import '../App.css'
import Selector from '../components/Selector';
import Modal from '../components/Modal';
import GeneratedMovieDisplay from '../components/GeneratedMovieDisplay';
import Loading from '../components/Loading';

const MovieGen = ({}) => {

    const [chosenMovie, setChosenMovie] = useState(null);
    const {allMovieInfo, isLoading, openModal, selectedAttributes} = useContext(MovieContext);
    
    const [moods, setMoods] = useState([]);
    const [weather, setWeather] = useState([]);
    const [interests, setInterests] = useState([]);
    const attributeTypes = ["mood", "weather", "interest"];

    const grabPossibleAttributes = (attrName) => {
        let newList = [];
        for (const movie of allMovieInfo) {
            let newAttr = movie[attrName];
            if (!newList.includes(newAttr)) {
                newList.push(newAttr);
            }
        }
        return newList;
    }

    useEffect(() => {
        if (isLoading === false) {
            setMoods(grabPossibleAttributes("mood"));
            setWeather(grabPossibleAttributes("weather"));
            setInterests(grabPossibleAttributes("interest"));
        }
    }, [isLoading])

    // For now, this uses the testing data until we get the database set up
    const determineMovie = () => {
        // cancel if nothing is selected to prevent error
        if (selectedAttributes.length === 0 || isLoading === true) {
            return;
        }

        let bestMovieMatches = [];
        let highestMatchCount = 0;
        // loop through all movies to find one with most matches
        for (const movie of allMovieInfo) {
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

        // open the modal to show results
        openModal();
    }

    // All the different attributes will be mapped, in order for a user to select or deselect one

    return (
        // Will show loading component if everything hasn't been retrieved from supabase yet
        <div className='homepage full-height'>
            {isLoading ? (
                <Loading isLightColor={true} />
            ) : (
                <>
                    <h2 className='pagetitle generatehead'>Pick a movie based on...</h2>
                    <div className='choose-movie'>
                        <div className='selection-div'>
                            <h3>Your Mood:</h3>
                            {moods.map((item, index) => (
                                    <Selector key={"mood" + index} attribute={item} />
                                ))}
                        </div>
                        <div className='selection-div'>
                            <h3>The Weather:</h3>
                            {weather.map((item, index) => (
                                    <Selector key={"weather" + index} attribute={item} />
                                ))}
                        </div>
                        <div className='selection-div'>
                            <h3>Your Hobbies:</h3>
                            {interests.map((item, index) => (
                                    <Selector key={"interest" + index} attribute={item} />
                                ))}
                        </div>
                        
                    </div>
                    <div className='movie-btn'>
                    {/* TODO Disable button if nothing is selected */}
                    <button className='choose-movie-btn' onClick={determineMovie}>Pick Movie</button>
                    <Modal>
                        <GeneratedMovieDisplay movieData={chosenMovie} />
                    </Modal>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default MovieGen