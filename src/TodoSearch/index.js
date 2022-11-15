import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'


function TodoSearch() {

    const {
        searchValue, 
        setSearchValue
    } = React.useContext(TodoContext);
    
    const onSearchValuechange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="cebolla"
            value={searchValue}
            onChange={onSearchValuechange}
        ></input>
    );
}

export { TodoSearch };