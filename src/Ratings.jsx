import PropTypes from "prop-types";

const Ratings = ({ ratings }) => {
    return(
        <div>
            <h2>Ratings</h2>
            <p>IMDB Ratings: {ratings.imdbRating}</p>
            <p>Rotten Tomato Rating: {ratings.rottenTomatoRating}</p>
            <p>Roger Ebert Rating: {ratings.rogerEbertRating}</p>
        </div>
    );
};

Ratings.propTypes = {
    ratings: PropTypes.shape({
        imdbRating: PropTypes.number,
        rottenTomatoRating: PropTypes.number,
        rogerEbertRating: PropTypes.number,
    }).isRequired,
};

export default Ratings;