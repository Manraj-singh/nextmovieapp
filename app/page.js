// Home page route of our application
// It is being rendered as server side component
// components created inside app folder are server side component, to make it client side need to write "use client" directive at the top of the file
"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [msg, setMsg] = useState("Start searching movies");

  const handleSearch = async () => {
    setMsg("");
    if (!query.length > 0) {
      setMsg("please enter movie name to search");
      return;
    }
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = res.data.map((item) => item.show);
    data.length == 0 && setMsg("No results found");
    setShows(data);
  };

  return (
    <div className="wrapper">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search TV Shows"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="search-list" id="search-list">
        {shows &&
          shows.map((show) => (
            <>
              <div className="search-list-item">
                <div className="search-item-thumbnail">
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

                <div className="search-item-info">
                  <h3>
                    <Link href={`/tv-shows/details/${show.id}`}>
                      {show.name}
                    </Link>
                  </h3>
                  <p>Language: {show.language}</p>
                  <p>Genres: {show.genres.join(", ")}</p>
                  <p>Runtime: {show.runtime} minutes</p>
                  <p>
                    Premiered:{" "}
                    {new Date(show.premiered).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p>Rating: {show.rating?.average}</p>
                  <p>Country: {show.network?.country?.name}</p>
                </div>
              </div>
            </>
          ))}
        {shows.length == 0 && <h2>{msg}</h2>}
      </div>
    </div>
  );
}
