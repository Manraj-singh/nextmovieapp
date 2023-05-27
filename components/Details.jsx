import React from "react";

import "@styles/details.css";

// This component will show the details about a movie 
const Details = ({ show }) => {
  return (
    <div className="content">
      <div className="left-side">
        <img
          id="poster"
          src={
            show.image
              ? show.image.medium
              : "https://via.placeholder.com/150x225?text=Image+Not+Found"
          }
          alt={show.name}
        />
      </div>
      <div className="right-side">
        <p>
          <span> {show.name} </span>
        </p>

        <p>
          <strong>Language: </strong>
          <span>{show.language}</span>
        </p>
        <p>
          <strong>Genres: </strong>
          <span>{show.genres?.join(", ")}</span>
        </p>
        <p>
          <strong>Runtime: </strong>
          <span>{show.runtime} minutes</span>
        </p>
        <p>
          <strong>Premiered: </strong>
          <span>
            {" "}
            {new Date(show.premiered).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </p>
        <p>
          <strong>Rating: </strong>
          <span>{show.rating?.average}</span>
        </p>
        <p>
          <strong>Country: </strong>
          <span>{show.network?.country?.name}</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
