import ReactStars from "react-rating-stars-component";
import React from "react";


function Star ({setRate}) {
    const ratingChanged = (newRating) => {
      setRate(newRating);
      };
       
    return (
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />

    );
}
export default Star

 
