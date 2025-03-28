import { useState, useContext, useEffect } from 'react'
import { MovieContext } from '../MovieContext';
import '../App.css'

// This will allow us to select an attribute and allow us to select more than one
const Selector = ({attribute}) => {

    const [isSelected, setIsSelected] = useState(false);
    const {removeFromAttributes, addToAttributes} = useContext(MovieContext);

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
        <div className='selector'>
            <input type="checkbox" checked={isSelected} onChange={changeSelected} />
            <p>{attribute}</p>
        </div>
    );
}

export default Selector;