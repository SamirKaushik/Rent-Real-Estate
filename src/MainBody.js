import SearchFilter from "./SearchFilter";
import Houses from "./Houses";
import React,{useState,useEffect} from "react";
import data from "./data";
const MainBody=()=>{
    const [Data,setData]=useState(data);
    const [filter,setFilter]=useState(["All","All","All"]);
    const updateToFilter=()=>{
        const newdata=data.filter((item)=>(item.state===filter[0]||filter[0]==="All")&&(item.city===filter[1]||filter[1]==="All")&&(item.categoryName===filter[2]||filter[2]==="All"))
        setData(newdata);
    }
    useEffect(()=>{
        updateToFilter();
    },[filter]);
    return (<>
    <SearchFilter filterVal={setFilter} filter={filter}/> 
    <Houses data={Data}/>
    </>);
}
export default MainBody;