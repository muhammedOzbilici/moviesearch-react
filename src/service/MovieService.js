import axios from 'axios';

const MOVIE_API_URL = 'http://localhost:8082/movies/search/'

class MovieService {

    fetchMoviesByTitle(movieTitle) {
        return axios.get(MOVIE_API_URL + movieTitle);
    }


}



export default new MovieService();
