import { useContext, useEffect, useState } from "react"
import { MovieContext } from "../MovieContext";
import MovieBox from "../components/MovieBox";
import Loading from "../components/Loading";
import BrowseMovieDisplay from "../components/BrowseMovieDisplay";
import Modal from "../components/Modal";

const Browse = ({}) => {

    const {allMovieInfo, isLoading} = useContext(MovieContext);
    const [movieIdToShow, setMovieIdToShow] = useState(null);

    const {modalMovieDataForBrowse, loadMovieDataInBrowse} = useContext(MovieContext);

    // show loading component if nothing is loaded yet, or if the new data isn't loaded yet
    const showModal = modalMovieDataForBrowse !== null && movieIdToShow === modalMovieDataForBrowse.id;

    useEffect(() => {
        if (movieIdToShow !== null) {
            loadMovieDataInBrowse(movieIdToShow);
        }
    }, [movieIdToShow])

    return (
        <div className="homepage">
            <div className="browsepage">
                <h2 className="broswehead">Greatest Of All Time Movies</h2>
                <div className="movieflex">

                {isLoading ? <Loading /> : allMovieInfo.map((movieData, index) => (
                                <MovieBox key={"movie" + index} movieData={movieData} setIdToShow={setMovieIdToShow} />
                            ))}
                </div>
            </div>
            {/* Modal area */}
            <Modal>
                {/* Show loading if the new data isn't fetched yet */}
                {showModal ? (
                    <BrowseMovieDisplay movieId={movieIdToShow} />
                ) : 
                (
                    <Loading />
                )}
            </Modal>
        </div>
    )
}

export default Browse