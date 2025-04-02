const MovieBox = ({movieData}) => {

    const {id, name, image} = movieData;


    return (
        <div className="movieBoxArea">
            <div className="moviebox">
                <img className="browseMovieImage" src={image} />
            </div>
            <div className="movietitle">
                <p>{name}</p>
                <button className="arrow-button">→</button>
            </div>
        </div>
    )
}

export default MovieBox;