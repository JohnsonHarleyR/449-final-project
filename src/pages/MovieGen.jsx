import ChooseMovie from "../components/ChooseMovie"
import MovieProvider from "../MovieContext"

const MovieGen = ({}) => {

    return (
        <MovieProvider>
        <div>
            Movie Generator Here
            <ChooseMovie />
        </div>
        </MovieProvider>
    )
}

export default MovieGen