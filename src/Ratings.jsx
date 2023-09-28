import PropTypes from "prop-types";

const Ratings = ({ tmdbRating}) => {
    return(
        <div>
            <h2>Ratings</h2>
            <p>TMDB Rating: {tmdbRating}</p>
        </div>
    );
};

Ratings.propTypes = {
    tmdbRating: PropTypes.number,
};

export default Ratings;