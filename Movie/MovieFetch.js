export const Moviefetch = async (searchText, moviesCallback, errorCallback, finallyCallback) => {
    try {
        // Fetch data from OMDB API using search text
        const response = await fetch(`http://www.omdbapi.com/?s=${searchText}&type=movie&apikey=e977b024`);
        const data = await response.json();

        if (data.Response === 'True') {
            // If movies are found, fetch more details for each movie
            const movieInfoPromises = data.Search.map((movie) => fetchMovieInfo(movie.imdbID, errorCallback));
            const Movieinfo = await Promise.all(movieInfoPromises);

            // Call the callback with the movie info
            moviesCallback(Movieinfo);
            errorCallback(null);
        } else {
            // If no movies are found, call the callback with an empty array and an error message
            moviesCallback([]);
            errorCallback(data.Error);
        }
    } catch (err) {
        // Handle any errors that occur during the fetch
        moviesCallback([]);
        errorCallback('An error occurred while fetching data.');
    } finally {
        // Always call the finally callback
        finallyCallback();
    }
};

const fetchMovieInfo = async (id, errorCallback) => {
    try {
        // Fetch detailed movie info using the movie ID
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=e977b024`);
        const data = await response.json();

        if (data.Response === 'True') {
            return data;
        } else {
            throw new Error(data.Error);
        }
    } catch (err) {
        // Handle any errors that occur during the fetch
        errorCallback('An error occurred while fetching movie details.');
    }
};
