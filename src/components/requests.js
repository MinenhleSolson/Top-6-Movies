const API_KEY = "3b55913ef737cbc3528e6d8f7350738e";


const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchUcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

}

export default requests;