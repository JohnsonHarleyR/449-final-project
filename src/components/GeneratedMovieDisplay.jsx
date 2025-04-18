import Loading from "./Loading";

const GeneratedMovieDisplay = ({movieData}) => {

    const {name, image} = movieData;
    const showData = movieData !== null;

    return (
        <>
            {/* Basically, if there's no movie data, it will show a loading screen */}
            {showData ?
            (
            <div className="genmoviedisplay">
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