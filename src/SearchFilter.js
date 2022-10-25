import React from "react";
import data from "./data";
const SearchFilter = ({filterVal,filter,search}) => {
    const states=new Set(); states.add("All");
    const cities=new Set(); cities.add("All");
    const types=new Set(); types.add("All");
    for(var i=0;i<data.length;i++){
        if(data[i].state!=null) states.add(data[i].state);
        if(data[i].city!=null) cities.add(data[i].city);
        if(data[i].categoryName!=null) types.add(data[i].categoryName);
    }
    const handleFilter=()=>{
        const val0=document.getElementById("state").value;
        const val1=document.getElementById("city").value;
        const val2=document.getElementById("type").value;
        filterVal([val0,val1,val2]);  
    }
    const searchbar=document.getElementById("searchbar");
    if(searchbar)
    searchbar.addEventListener('input',()=>{
        search(searchbar.value);
    })
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
                        {Array.from(states).map((state,index)=>{
                            return <option value={state} key={index}>{state}</option>
                        })}
                    </select>
                </div>
                <div>
                <span>City</span>
                    <select name="city" id="city">
                    {Array.from(cities).map((city)=>{
                            return <option value={city}>{city}</option>
                        })}
                    </select>
                </div>
                <div>
                <span>Category</span>
                    <select name="type" id="type">
                    {Array.from(types).map((type)=>{
                            return <option value={type}>{type}</option>
                        })}
                    </select>
                </div>
                <button id="submit" onClick={handleFilter}>Submit</button>
            </div>
            <div id="selectedfilters">
                <span>State: {filter[0]}</span>
                <span>City: {filter[1]}</span>
                <span>Category: {filter[2]}</span>
            </div>
        </div>);
}
export default SearchFilter;