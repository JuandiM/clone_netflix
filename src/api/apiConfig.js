const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'dffad074c4afe28ee8fa870965127134',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;