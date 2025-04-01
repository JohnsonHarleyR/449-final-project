import { useContext, useEffect } from "react"
import { fetchMovieDataById } from "../js/fetch-data";
import { MovieContext } from "../MovieContext";
import MovieBox from "../components/MovieBox";
import Loading from "../components/Loading";

const Browse = ({}) => {

    const {allMovieInfo, isLoading} = useContext(MovieContext);

    useEffect(() => {
        fetchMovieDataById(14306);
    }, []);

    return (
        <div className="homepage">
            <div className="browsepage">
                <h2 className="broswehead">Greatest Of All Time Movies</h2>
                <div className="movieflex">

                {isLoading ? <Loading /> : allMovieInfo.map((movieData, index) => (
                                <MovieBox key={"movie" + index} movieData={movieData} />
                            ))}

                    {/* <div className="moviebox">
                        <p>flex 1</p>
                    </div>
                        <div className="moviebox">
                            <p>flex 1b</p>
                        </div>
                    <div className="moviebox">
                        <p>flex 2</p>
                    </div>
                    <div className="moviebox">
                        <p>flex 2b</p>
                    </div>
                    <div className="movietitle">
                        <p>flex 3</p>
                        <button class="arrow-button">→</button>
                    </div>
                    <div className="movietitle">
                        <p>flex 3b</p>
                        <button class="arrow-button">→</button>

                    </div>
                    <div className="movietitle">
                        <p>flex 4</p>
                        <button class="arrow-button">→</button>

                    </div>
                    <div className="movietitle">
                        <p>flex 4b</p>
                        <button class="arrow-button">→</button>
                    </div>
                    <div className="moviebox">
                        <p>flex 5</p>
                    </div>
                    <div className="moviebox">
                        <p>flex 5b</p>
                    </div>
                    <div className="moviebox">
                        <p>flex 6</p>
                    </div>
                    <div className="moviebox">
                        <p>flex 6b</p>
                    </div>
                    <div className="movietitle">
                        <p>flex 7</p>
                        <button class="arrow-button">→</button>

                    </div>
                    <div className="movietitle">
                        <p>flex 7b</p>
                        <button class="arrow-button">→</button>

                    </div>
                    <div className="movietitle">
                        <p>flex 8</p>
                        <button class="arrow-button">→</button>

                    </div>
                    <div className="movietitle">
                        <p>flex 8b</p>
                        <button class="arrow-button">→</button>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Browse