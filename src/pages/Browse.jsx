import { useEffect } from "react"
import MovieProvider from "../MovieContext"
import { fetchMovieDataById } from "../js/fetch-data";

const Browse = ({}) => {

    useEffect(() => {
        fetchMovieDataById(14306);
    }, []);

    return (
        <MovieProvider>
            <div>
                Browse Page Here
            </div>
        </MovieProvider>
    )
}

export default Browse