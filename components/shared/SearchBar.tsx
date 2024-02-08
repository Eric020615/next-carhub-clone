"use client";
// put use client to make it client side rendering since using hook in react
// since in next js all tsx is server side by default
import { useState } from 'react';
import { SearchManufacturer } from '.';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {

  };

  return (
    <form className='searchbar' 
    onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer = {manufacturer}
          setManufacturer = {setManufacturer}
        />

      </div>
    </form>
  )
}

export default SearchBar