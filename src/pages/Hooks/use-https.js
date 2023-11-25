import { useState, useCallback, useEffect } from "react";

const LINK = "https://api.themoviedb.org/3";

const useHttps = (requestMovies) => {
  const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=ee30bf8cad3af09970ebff1dff73d61f&with_network=123`,
    fetchTrending: `/trending/all/week?api_key=ee30bf8cad3af09970ebff1dff73d61f&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=ee30bf8cad3af09970ebff1dff73d61f&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=ee30bf8cad3af09970ebff1dff73d61f&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=ee30bf8cad3af09970ebff1dff73d61f&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=ee30bf8cad3af09970ebff1dff73d61f&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=ee30bf8cad3af09970ebff1dff73d61f&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=ee30bf8cad3af09970ebff1dff73d61f&with_genres=99`,
    fetchSearch: `/search/movie?api_key=ee30bf8cad3af09970ebff1dff73d61f&language=en-US`,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [banner, setBanner] = useState();
  const [originals, setOriginals] = useState();
  const [trending, setTrending] = useState();
  const [topRated, setTopRated] = useState();
  const [actionMovies, setActionMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  const [romanceMovies, setRomanceMovies] = useState();
  const [documentaries, setDocumentaries] = useState();

  const fetchNetflixOriginals = useCallback(async () => {
    try {
      setIsLoading(true);

      //FetchNetflixOriginals
      const responseOri = await fetch(
        `${LINK}${requests.fetchNetflixOriginals}`
      );

      if (!responseOri.ok) {
        throw new Error("Something went wrong!");
      }

      const dataOri = await responseOri.json();

      setBanner(
        dataOri.results[Math.floor(Math.random() * dataOri.results.length - 1)]
      );
      setOriginals(dataOri.results);

      //Fetch--Trending
      const responseTrending = await fetch(`${LINK}${requests.fetchTrending}`);

      if (!responseTrending.ok) {
        throw new Error("Something went wrong!");
      }

      const dataTrending = await responseTrending.json();

      setTrending(dataTrending.results);

      //Fetch--TopRated
      const responseTopRated = await fetch(`${LINK}${requests.fetchTopRated}`);

      if (!responseTopRated.ok) {
        throw new Error("Something went wrong!");
      }

      const dataTopRated = await responseTopRated.json();

      setTopRated(dataTopRated.results);

      //Fetch--ActionMovies
      const responseActionMovies = await fetch(
        `${LINK}${requests.fetchActionMovies}`
      );

      if (!responseActionMovies.ok) {
        throw new Error("Something went wrong!");
      }

      const dataActionMovies = await responseActionMovies.json();

      setActionMovies(dataActionMovies.results);

      //Fetch--ComedyMovies
      const responseComedyMovies = await fetch(
        `${LINK}${requests.fetchComedyMovies}`
      );

      if (!responseComedyMovies.ok) {
        throw new Error("Something went wrong!");
      }

      const dataComedyMovies = await responseComedyMovies.json();

      setComedyMovies(dataComedyMovies.results);

      //Fetch--HorrorMovies
      const responseHorrorMovies = await fetch(
        `${LINK}${requests.fetchHorrorMovies}`
      );

      if (!responseHorrorMovies.ok) {
        throw new Error("Something went wrong!");
      }

      const dataHorrorMovies = await responseHorrorMovies.json();

      setHorrorMovies(dataHorrorMovies.results);

      //Fetch--RomanceMovies
      const responseRomanceMovies = await fetch(
        `${LINK}${requests.fetchRomanceMovies}`
      );

      if (!responseRomanceMovies.ok) {
        throw new Error("Something went wrong!");
      }

      const dataRomanceMovies = await responseRomanceMovies.json();

      setRomanceMovies(dataRomanceMovies.results);

      //Fetch--Documentaries
      const responseDocumentaries = await fetch(
        `${LINK}${requests.fetchDocumentaries}`
      );

      if (!responseDocumentaries.ok) {
        throw new Error("Something went wrong!");
      }

      const dataDocumentaries = await responseDocumentaries.json();

      setDocumentaries(dataDocumentaries.results);

      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  //re-render fetch whenever changed
  useEffect(() => {
    fetchNetflixOriginals();
  }, [fetchNetflixOriginals]);

  return {
    isLoading,
    banner,
    originals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
};

export default useHttps;
