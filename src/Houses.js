import Property from "./Property.js";
import React from "react";
const Houses = () => {
    const obj={
        "title": "Prevu",
        "subTitle": null,
        "price": null,
        "menu": null,
        "categoryName": "Real estate agency",
        "address": "110 E 25th St, New York, NY 10010",
        "locatedIn": "Floor 14 · make it nice.",
        "neighborhood": "110 E 25th St",
        "street": "110 E 25th St",
        "city": "New York",
        "postalCode": "10010",
        "state": "New York",
        "countryCode": "US",
        "plusCode": "P2R8+C2 New York",
        "website": "https://www.prevu.com/",
        "phone": "(646) 603-6868",
        "temporarilyClosed": false,
        "location": {
          "lat": 40.7410448,
          "lng": -73.9848854
        },
        "permanentlyClosed": false,
        "totalScore": 5,
        "isAdvertisement": false,
        "rank": 40,
        "placeId": "ChIJjfMNRBhawokRoBNyDcpX20E",
        "categories": [
          "Real estate agency"
        ],
        "cid": "4745483157685539744",
        "url": "https://www.google.com/maps/place/Prevu/@40.7410448,-73.9848854,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a18440df38d:0x41db57ca0d7213a0!8m2!3d40.7410448!4d-73.9848854?hl=en",
        "searchPageUrl": "https://www.google.com/maps/search/real+estate/@51.9662889,-179.941849,12z?hl=en",
        "searchString": "real estate",
        "scrapedAt": "2022-10-19T09:20:05.708Z",
        "openingHours": [
          {
            "day": "Wednesday,",
            "hours": "Open 24 hours"
          },
          {
            "day": "Thursday,",
            "hours": "Open 24 hours"
          },
          {
            "day": "Friday,",
            "hours": "Open 24 hours"
          },
          {
            "day": "Saturday,",
            "hours": "Open 24 hours"
          },
          {
            "day": "Sunday,",
            "hours": "Open 24 hours"
          },
          {
            "day": "Monday,",
            "hours": "Open 24 hours"
          },
          {
            "day": "Tuesday,",
            "hours": "Open 24 hours"
          }
        ],
        "additionalInfo": {
          "Service options": [
            {
              "Online appointments": true
            },
            {
              "Onsite services": true
            }
          ]
        },
        "reviewsCount": 439,
        "reviewsDistribution": {
          "oneStar": 2,
          "twoStar": 1,
          "threeStar": 1,
          "fourStar": 0,
          "fiveStar": 435
        },
        "imageUrls": [
          "https://lh5.googleusercontent.com/p/AF1QipOLCSS2TM3GZNGj7psgH38MVufdM7rDn5sZZ3o=w1920-h1080-k-no"
        ],
        "reviews": [],
        "orderBy": [],
        "_id": "4e8gwca392m",
        "__index": 1
      };
      
    return (<div className="houses">
        <Property data={obj}/>
        <Property data={obj}/>
        <Property data={obj}/>
        <Property data={obj}/>
        <Property data={obj}/>
        <Property data={obj}/>
        </div>);
}
export default Houses;