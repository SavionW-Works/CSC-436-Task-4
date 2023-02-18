import { useState } from 'react' 
import { useEffect } from 'react'
import React from 'react'
import './App.css' 
import Movies from './components/Movies'  
import SearchBar from './components/SearchBar' 
import movieData from './utils/movies'
function App() { 

  const [search, setSearch] = useState('');  //The search value given by users 
  
  const [maxLength, setMaxLength] = useState('');

  const [sortType, setSortType] = useState("Ascending");  //The search value given by users 

  const [movies, setMovies] = useState([]); 

  useEffect(() => {
  
    // Changes sort order depending on value of sortType
    if (sortType == "Ascending") {
      movieData.sort( (a, b) => a.length - b.length);    

    } 
  
    else if (sortType == "Descending")  {
      movieData.sort( (a, b) => b.length - a.length); 
    } 


    {/*Creates a new array equal to the filtered version of movies based on search terms */}
    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) && //Title filter

         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
    
    
        })); 
                 

  }, [search, maxLength, sortType]); //End of useEffect



  
  

  return (
  <> 
  
  
    {/*Header Bar for Movie Searching */} 
    <SearchBar 
    search={search} 
    setSearch={setSearch} 
    maxLength={maxLength} 
    setMaxLength={setMaxLength}  
    sortType = {sortType} 
    setSortType = {setSortType}
    
    />  
    
    <br /> 

   <p> App = {search} </p>  
    
    {/*Output the Movies */}
    <Movies movies={movies}/>  

    {/*Both SearchBar and Movies  will not contain actual logic. They're considered dummy components*/}
    
  </>)
    

  
}

export default App
