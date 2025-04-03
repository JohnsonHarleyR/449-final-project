import { useContext} from "react";
import Loading from "./Loading";
import { MovieContext } from "../MovieContext";

const BrowseMovieDisplay = () => {
    
    const {modalMovieDataForBrowse} = useContext(MovieContext);
    const isMovieLoading = modalMovieDataForBrowse == null;

    // There is more than this from the api that we can use
    const {id, image, title, adult, tagline, overview, releaseDate} = modalMovieDataForBrowse;

    return (
        <div>
            {/* Error prevention - only show data if it's not null, otherwise show loading */}
            {isMovieLoading ? (<Loading />) : (
                <> 
                    <img src={image}/>
                    <h3>{title}</h3>
                    <p>{overview}</p>
                </>
            )}
        </div>
    );
}

export default BrowseMovieDisplay;