function MovieComponent(props){
    return(
        <div className="movie" key={props.movie.imdbID}>
            <img className="movieImg" src={props.movie.Poster !== "N/A" ? props.movie.Poster : "https://via.placeholder.com/400"} alt={props.Title} />
            <div className="movieDiv">
                <div className="subtext">
                    <p className="movieType">{props.movie.Type}</p>
                    <p className="movieYear">{props.movie.Year}</p>
                </div>
                <h3 className="movieTitle">{props.movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieComponent