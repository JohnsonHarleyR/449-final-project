import { useContext } from "react";
import { MovieContext } from "../MovieContext";

const MovieBox = ({movieData, setIdToShow}) => {

    const {id, name, image} = movieData;
    const {openModal} = useContext(MovieContext);

    const showMovie = () => {
        // set the modal id so it shows
        setIdToShow(id);

        // open the modal from the context
        openModal();
    }

    return (
        <>
            <div className="movieBoxArea">
                <div className="moviebox">
                    <img className="browseMovieImage" src={image} />
                </div>
                <div className="movietitle">
                    <p>{name}</p>
                    <button className="arrow-button" onClick={showMovie}>→</button>
                </div>
            </div>
        </>
    )
}

export default MovieBox;