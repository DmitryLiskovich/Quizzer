import React from 'react';

let timer;
export const Search = ({data, update}) => {

  function searchChange(e) {
    const value = e.target.value;
    
    if(timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      update(data.filter((item) => item.config.quiz_title.toLowerCase().includes(value)))
    }, 500);
  }

  return (
    <div className='search-input__wrapper'>
      <label htmlFor='search'>Search</label>
      <input id='search' name='search' type='text' onChange={searchChange} />
    </div>
  )
}