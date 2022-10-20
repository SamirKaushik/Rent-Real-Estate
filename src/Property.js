import React from "react";
const Property = ({data}) => {
    return (
    <div className="property">
        <div className="image"><img src={data.imageUrls[0]} alt={data.title} /></div>
        <div className="description">{data.title}</div>
    </div>
    );
}
export default Property;