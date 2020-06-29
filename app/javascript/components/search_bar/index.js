import React, { Fragment, useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import './style.scss'

const SearchBar = () => {
    const [query, setQuery] = useState("")

    function handleChange(event){
        setQuery(event.target.value)
    }

    function handleSubmit(event){
        const newUrl = `/search?query=${query}`;
        console.log(newUrl);
        window.location.href = newUrl;
        event.preventDefault();
    }

    return (
        <Fragment>
                <form className="searchBar" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Busque por um livro..."
                        value={query}
                        onChange={handleChange}
                    />
                    <div className="search"></div>
                </form>
            {/* <form onSubmit={handleSubmit}>
                <label style={{marginRight: 5}}>
                    <input
                        type="text"
                        placeholder="Busque um livro por seu título, autor ou uma categoria..."
                        value={query}
                        onChange={handleChange}
                        style={{backgroundColor: "#FFDC75", borderRadius: 25}}
                    />
                </label>
                <button style={{backgroundColor: "#FFDC75", borderRadius: 20}}>
                    <FaSearch className="is-small" style={{color: "#FFA500"}}/>
                </button>
                </form> */}
        </Fragment>
    )
}

export default SearchBar;
