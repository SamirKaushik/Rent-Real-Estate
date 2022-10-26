import React from "react";
const Property = ({ data, key }) => {
    return (
        <div className="property">
            <div className="image"><img src={data.imageUrls[0]} alt={data.title} /></div>
            <div className="description">
                <div className="price">
                    <span>${Math.ceil(Math.random() * (4000)) + 1000}</span>
                    <span>/month</span>
                </div>
                <div className="title">{data.title}</div>
                <div className="address">{data.address}</div>
                <div className="greybar"></div>
                <div className="closed">{data.temporarilyClosed ? <span style={{ color: 'red', borderRadius: '0 0 10px 10px' }}>Closed</span> : <span style={{ color: 'green', borderRadius: '0 0 10px 10px' }}>Open</span>}</div>
            </div>
        </div>
    );
}
export default Property;