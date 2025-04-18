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
                <h2 className="genmovietitle">Your movie is:</h2>
                <img src={image} />
                <h3>{name}</h3>
            </div>
        ) : (
            <Loading />
        )

        }
        </>
    
);
}

export default GeneratedMovieDisplay;