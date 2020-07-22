import React, { Component } from 'react'
import { getMovies } from '../services/mockMoviesService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = (movie) => {
        // console.log(this.state.movies.length)
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        // console.log(movies.length)
        this.setState({ movies }); // as if this.state({ movies : movies})
    }

    render() {
     
        const { length: count } = this.state.movies;

        if (count === 0) {
            return <p>No movies in the database</p>;
        }
        
        return (
            <>
            <p>Showing {count} movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}  >
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button
                                    onClick={ () => { this.handleDelete(movie) }}
                                    className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}

export default Movies