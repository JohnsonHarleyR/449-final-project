import { useState, useContext, useEffect } from 'react'
import { MovieContext } from '../MovieContext';
import '../App.css'

// This will allow us to select an attribute and allow us to select more than one
const Selector = ({attribute}) => {

    const [isSelected, setIsSelected] = useState(false);
    const {removeFromAttributes, addToAttributes} = useContext(MovieContext);

    const selectorClass = isSelected ? "selector on" : "selector";

    const changeSelected = () => {
        setIsSelected(!isSelected);
    }

    useEffect(() => {
        if (isSelected) {
            addToAttributes(attribute);
        } else {
            removeFromAttributes(attribute);
        }
    }, [isSelected]);

    return (
        <div className={selectorClass} onClick={changeSelected}><p>{attribute}</p></div>
    );
}

export default Selector;