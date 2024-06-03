import "./App.css";
import { useState} from "react";
// import testMovie from './braveheart.json';
import Mainlayout from "./layouts/main_layout";
import MovieCard from "./components/movie_card";
import useFetch from "./hooks/useFetch";
import ThemeProvider from "./contexts/themeContext";
import theme from "./theme/theme";
import useMediaQuery from "./hooks/useMediaQuery";
import { BASE_URL } from "./constants/api";
import Typography from "./components/typography";
import Loading from "./components/loading";
import NotFound from "./components/not_found";
function App() {

  const [title, setTitle] = useState("");
  // const [message, setMessage] = useState("");
  const isMobile = useMediaQuery('(max-width: 600px)');
  const { data, isLoading, error, fetchData } = useFetch(`${BASE_URL}/searchMovie?title=${title}`, "GET",{});

  // const { data: popularMovies, isLoading: isLoadingPopular, error: errorPopular, fetchData: fetchDataPopular } = useFetch(`${BASE_URL}/popularMovies`, "GET",{});
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    // setTitle("");
    // setMessage(`Searching for movie [${title}]`);

    try {
      //FIXME: Using mock file. Connect with the relevant backend for live data.
      // setMessage(JSON.stringify(testMovie));
      await fetchData();
    } catch (err) {
      // setMessage(`Error: [${err}]`);
      console.log(err);
    }
  };

  return (
 
    // <div className="App">
    <ThemeProvider theme={theme}>
      <Mainlayout>
        <div className="moviesForm" >
          <form onSubmit={handleSubmit} className="moviesForm">
          <input
            type="text"
            value={title}
            placeholder="Search Movie Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        <button type="submit">Search Movie</button>
      </form>
      <div className="results"  style={
            isMobile ? {
                width:'100%'
            } : {
                width:'400px'
            }
        }>
      {
          isLoading ? (
            <Loading />
          ) : error ? (
            <NotFound text="Error Fetching Data !!!"/>
          ) : data ?
            data.Response === 'False' ? <NotFound text="No Movie Found !!!"/> :
            (
            <div style={{
              background: theme.colors.background,
              padding: '1rem',
            }}>
              <MovieCard movie={data} />
            </div>
          ) : <div style={{
              display:'flex',
              background: theme.colors.background,
              // padding: '1rem',
              minHeight:'300px',
              justifyContent:'center',
              alignItems:'center',
            }}>
              <Typography variant='heading' weight='bold' fontFamily='heading' color="secondary">
                Search For a Movie for More Info
              </Typography>
            </div>
        }
      </div>
        </div>
      </Mainlayout>
      </ThemeProvider>
    // </div>
  );
}

export default App;
