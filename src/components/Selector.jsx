import { useContext, useRef } from 'react'
import { MovieContext } from '../MovieContext';
import '../App.css'

// This will allow us to select an attribute and allow us to select more than one
const Selector = ({ attribute }) => {

    //const [isSelected, setIsSelected] = useState(false);
    const checkBox = useRef();
    const { removeFromAttributes, addToAttributes, selectedAttributes } = useContext(MovieContext);

    // determines whether to check the checkbox.
    const isSelected = selectedAttributes.includes(attribute);

    // add or remove attributes according to box being checked or unchecked
    const changeSelected = () => {
        if (checkBox.current.checked === true && !selectedAttributes.includes(attribute)) {
            addToAttributes(attribute);
        } else {
            removeFromAttributes(attribute);
        }
    }

    return (
        <div className='selector'>
            <input ref={checkBox} checked={isSelected} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm' type="checkbox" onChange={changeSelected} />
            <p>{attribute}</p>
        </div>
    );
}

export default Selector;