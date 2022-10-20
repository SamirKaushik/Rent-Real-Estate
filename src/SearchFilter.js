import React from "react";
import data from "./data";
const SearchFilter = () => {
    return (
        <div id="mainbody">
            <div id="textsearch">
                <div id="searchhead">Search properties to rent</div>
                <input type="text" name="searchbar" id="searchbar" placeholder="Search with Search Bar"/>
            </div>
            <div id="filters">
                <div>
                    <span>State</span>
                    <select name="state" id="state">
                    </select>
                </div>
                <div>
                <span>City</span>
                    <select name="city" id="city">
                    </select>
                </div>
                <div>
                <span>Type</span>
                    <select name="type" id="type">

                    </select>
                </div>
                <button id="submit">Submit</button>
            </div>
        </div>);
}
export default SearchFilter;