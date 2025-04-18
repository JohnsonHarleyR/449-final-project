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
            <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm' type="checkbox" checked={isSelected} onChange={changeSelected} />
            <p>{attribute}</p>
        </div>
    );
}

export default Selector;