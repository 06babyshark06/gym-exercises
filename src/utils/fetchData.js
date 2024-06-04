export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "30b75f8ca5msh6564de953e46953p1b15bfjsna932ced5fe56",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "30b75f8ca5msh6564de953e46953p1b15bfjsna932ced5fe56",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
