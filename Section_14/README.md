# Sending Http Requests

## fetch()
`function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;`

- Promise
	- 잠재적으로 발생할 수 있는 오류나 호출에 대한 응답에 반응할 수 있게 해주는 객체

- fetch의 기본값은 GET
- method를 이용해서 POST도 가능
	
```javascript
// GET
const [movies, setMovies] = useState([]);

function fetchMoviesHandler() {
  fetch("https://swapi.dev/api/films")
    .then((response) => {
	// response body에서 json으로 변환
      return response.json();
    })
    .then((data) => {
      const transformedMovies = data.results.map((movieData) => {
    // json을 우리 코드에 맞게 mapping
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
        };
      });
      setMovies(data.results);
    });
}
```

```javascript
// POST
async function addMovieHandler(movie) {
  const response = await fetch(
    "https://123467890.firebaseio.com/movies.json",
    {
      method: "POST",
      // data를 JSON으로 변환
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
}
```

