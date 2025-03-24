import { useState } from 'react'
import { MovieContext } from '../MovieContext';
import '../App.css'
import Selector from './Selector';

// This will allow us to select an attribute and allow us to select more than one
const ChooseMovie = ({}) => {

    const {selectedAttributes} = useContext(MovieContext);

    const determineMovie = () => {
        
    }

    return (
        <>
        <div className='choose-movie'>
            <Selector attribute={"Sunny"} />
            <Selector attribute={"Cloudy"} />
            <Selector attribute={"Rainy"} />
            
            <Selector attribute={"Happy"} />
            <Selector attribute={"Sad"} />
            <Selector attribute={"Goofy"} />

            <Selector attribute={"Golf"} />
            <Selector attribute={"Sports"} />
            <Selector attribute={"Technology"} />
        </div>
        <div>

        </div>
        </>
        
    );
}

export default ChooseMovie;