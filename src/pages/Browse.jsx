import { useEffect } from "react"
import { fetchMovieDataById } from "../js/fetch-data";

const Browse = ({}) => {

    useEffect(() => {
        fetchMovieDataById(14306);
    }, []);

    return (
        <div>
            Browse Page Here
        </div>
    )
}

export default Browse