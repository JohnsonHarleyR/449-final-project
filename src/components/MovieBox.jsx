const MovieBox = ({movieData}) => {

    const {id, title, releaseDate, tagline, image} = movieData;


    return (
        <div className="movieBoxArea">
            <div className="moviebox">
                <img className="browseMovieImage" src={image} />
            </div>
            <div className="movietitle">
                <p>{title}</p>
                <button class="arrow-button">→</button>
            </div>
        </div>
    )
}

export default MovieBox;