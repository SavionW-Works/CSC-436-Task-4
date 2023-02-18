import {useState} from 'react';

const SearchBar = ({search, setSearch,  maxLength, setMaxLength, sortType, setSortType }) =>  {
    
    
    
    {/*Sets the value of the object with searchHandler to the string: search */}
    const searchHandler = (e) => {
        setSearch(e.target.value); {/*setSearch is passed in as a prop */}
    } 

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const sortHandler = () => {
         if (sortType == "Ascending") {
            setSortType("Descending")
         } 

         else {
            setSortType("Ascending")
         }
    }  
   

    
    return <> 
        
        <label htmlFor="search"> Search Query </label>  

        
        {/*Whenever the user types (found with a change in the input box), run searchHanlder */}
        <input type="text" name="search" onChange={searchHandler} value={search} /> 

        
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} /> 

        <button onClick={sortHandler} className="relative px-6 py-3 font-bold text-white rounded-lg group">
          <span className="relative">Sort by Time ({sortType})</span> 
        </button>

    
    
    </>
} 

export default SearchBar;