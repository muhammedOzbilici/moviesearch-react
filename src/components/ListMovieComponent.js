import React from 'react'
import {findDOMNode} from 'react-dom';

class ListMovieComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        };
        this.searchMoviesByTitle = this.searchMoviesByTitle.bind(this);
        this.loadMovieDetail = this.loadMovieDetail.bind(this);
    }

    componentDidMount() {
        this.searchMoviesByTitle();
    }

    searchMoviesByTitle(title) {
        title = findDOMNode(this.refs.q).value.trim();
        fetch("http://localhost:8082/movies/search/" + title)
            .then(response => response.json())
            .then(data => this.setState({movies: data}))
    }

    loadMovieDetail(title) {

    }

    render() {

        const {movies} = this.state;

        return (

            <div>
                <div>
                    <input type="text" placeholder="Enter Movie Title..." ref="q"/>
                    <button className="btn btn-success" type="submit"
                            onClick={this.searchMoviesByTitle.bind(this)}>Search
                    </button>

                    <div class="column">
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="hidden"
                                    style={{visibility: this.state.showButton ? 'visible' : 'hidden'}}>ImdbId
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.movies.map(
                                    movie =>
                                        <tr key={movie.imdbId}>
                                            <div class="card" style={{border: "solid"}}>
                                                <td>{movie.title}</td>
                                                <img src={movie.poster}/>
                                                <td>
                                                    <button className="btn btn-success"
                                                            onClick={this.loadMovieDetail.bind(movie.title)}> Read More
                                                    </button>
                                                </td>
                                            </div>
                                            <br/><br/><br/>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListMovieComponent;
