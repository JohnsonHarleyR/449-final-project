import Loading from "./Loading";

const GeneratedMovieDisplay = ({movieData}) => {

    const {name, image} = movieData;

    return (
        <>
            {/* Basically, if there's no movie data, it will show a loading screen */}
            {movieData !== null ?
            (
            <div>
                <img src={image} />
                <h2>{name}</h2>
            </div>
        ) : (
            <Loading />
        )

        }
        </>
    
);
}

export default GeneratedMovieDisplay;