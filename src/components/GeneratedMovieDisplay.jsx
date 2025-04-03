
const GeneratedMovieDisplay = ({movieData}) => {

    const {name, image} = movieData;

    return (
    <div>
        <img src={image} />
        <h2>{name}</h2>
    </div>
);
}

export default GeneratedMovieDisplay;