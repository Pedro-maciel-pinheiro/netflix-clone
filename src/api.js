const API_KEY = "3222a18cf7b4fa7cea56f0d249f58972";

const categories = [
  {
    name: "trending",
    title: "relevant",
    path: `/trending/all/week?api_key=${API_KEY}&language=en`,
  },
  {
    name: "netflixOriginals",
    title: "Originals Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    name: "topRated",
    title: "popular",
    path: `/movie/top_rated?api_key=${API_KEY}&language=en`,
  },
  {
    name: "comedy",
    title: "comedy",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romance",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: "documentariess",
    title: "documentaries",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await responde.json();
  } catch (error) {
    console.log("error getMovies:", error);
  }
};

export default categories;
