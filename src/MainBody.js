import SearchFilter from "./SearchFilter";
import Houses from "./Houses";
import React,{useState} from "react";
import data from "./data";
const MainBody=()=>{
    const [Data,setData]=useState(data);
    return (<>
    <SearchFilter/> 
    <Houses data={Data}/>
    </>);
}
export default MainBody;