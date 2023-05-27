"use client";
import Details from "@components/Details";
import axios from "axios";

import { useEffect, useState } from "react";

const showDetails = ({ params }) => {
  const [movie, setMovie] = useState({});

  const id = params.movieId;

  if (!Number.isInteger(parseInt(id))) {
    return;
  }

  const getMovieDetails = async () => {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return <Details show={movie} />;
};

export default showDetails;
