export const fetchData = async (endpoint: string) => {
  const YOUR_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTk2ODczNTBkMWFkZDdhYjRmNmIxOTdlYWI3OWVkZiIsIm5iZiI6MTcyMTg2MjIxNS4yMzA1NTMsInN1YiI6IjY2YTEwOWE0YTgzNGE0YTIzYWUwZDZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tMuyB0dMguvlFxEIjAKJr7Z5zmVrvxFMX_5WNiWUBtw';
  const url =  `https://api.themoviedb.org/3${endpoint}?language=en-US`;
  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${YOUR_ACCESS_TOKEN}` 
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorMessage = await response.text(); 
      throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorMessage}`);
    }
    const result = await response.json();
    return result.results; 
  } catch (error) {
    console.error('Fetch error:', error.message);
    return []; 
  }
};
