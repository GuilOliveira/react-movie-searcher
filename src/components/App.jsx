import './App.css';
import Header from './Header';
import {useState, useEffect} from 'react'
import MovieComponent from './MovieComponent';
import PageNavigation from './PageNavigation';
import key from '../api/apikey';
import getSearchButtons from '../utils/getSearchButtons';

const API_URL = `http://www.omdbapi.com/?apikey=${key()}`
console.log(API_URL)

function App() {

  const [searchText, setSearchText] = useState()
  const [searchedText, setSearchedText] = useState(" ")
  const [movies, setMovies] = useState()
  const [allPages, setAllPages] = useState()
  const [currentPage, setCurrentPage] = useState()
  const [buttonList, setButtonList] = useState()

  useEffect(()=> {
    async function fetchApi (){
      const response = await fetch(`${API_URL}&s=${encodeURI(searchedText)}&page=${currentPage}`)
          const responsejson = await response.json()
          console.log(responsejson)
          setMovies(responsejson.Search)

          const results = Math.ceil((parseInt(responsejson.totalResults))/10)
          if (results<1){setAllPages(1)}else{setAllPages(results)}
          setButtonList(getSearchButtons(currentPage, results))
      }
    fetchApi()
  },[currentPage, searchedText])

  return (
    <div className="App">
      <Header movies = {movies} setMovies = {setMovies}
       searchText = {searchText} setSearchText = {setSearchText}
       setAllPages = {setAllPages} allPages = {allPages}
       setCurrentPage = {setCurrentPage} currentPage = {currentPage}
       setSearchedText = {setSearchedText}/>
      {movies?.length > 0 ? (
        <div className="movieContainer">
          {movies.map((movie) => (<MovieComponent movie={movie} />))}
        </div>
      ) : (<p></p>)}
      
      {buttonList?.length > 0 && movies?.length > 0 ? (
        <div className="buttonsContainer">
          {buttonList.map((button) => (<PageNavigation pageNumber={button} movies = {movies} setMovies = {setMovies}
       searchText = {searchText} setSearchText = {setSearchText}
       setAllPages = {setAllPages} allPages = {allPages}
       setCurrentPage = {setCurrentPage} currentPage = {currentPage}
       setButtonList = {setButtonList}/>))}
        </div>
      ) : (<p></p>)}
    </div>
  );
}

export default App;
