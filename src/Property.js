import React from "react";
const Property = ({data}) => {
    return (

    <div className="property">
        <div className="image"><img src={data.url} alt="" /></div>
        <div className="description">{data.title}</div>
    </div>
    
    );
}
export default Property;