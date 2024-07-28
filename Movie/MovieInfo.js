import React from 'react';

function Movieinfo({ movie }) {
    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
                </div>
                <div style={{ flex: '3', marginLeft: '10px' }}>
                    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                        <h3>{movie.Title}</h3>
                        <h6 style={{ color: '#6c757d' }}>{movie.Released}</h6>
                        <p>{movie.Plot}</p>
                        <div>
                            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer" style={{ marginRight: '10px' }}>IMDB</a>
                            <a href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`} target="_blank" rel="noreferrer">Watch Trailer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movieinfo;
