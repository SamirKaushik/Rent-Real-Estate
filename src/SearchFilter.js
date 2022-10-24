import React from "react";
import data from "./data";
const SearchFilter = () => {
    const states=new Set();
    const cities=new Set();
    const types=new Set();
    for(var i=0;i<data.length;i++){
        if(data[i].state) states.add(data[i].state);
        if(data[i].city) cities.add(data[i].city);
        if(data[i].categoryName) types.add(data[i].categoryName);
    }
    console.log(states,cities,types);
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