import { useContext } from "react"
import ChooseMovie from "../components/ChooseMovie"
import { MovieContext } from "../MovieContext"
import Loading from "../components/Loading";

const MovieGen = ({}) => {

    const {isLoading} = useContext(MovieContext);

    return (
        <div>
            {isLoading ? <Loading /> : <ChooseMovie />}
        </div>
    )
}

export default MovieGen