import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "../context/globalContext";

const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const [images, setImages] = React.useState([]);
  const { isLoading, isFetching, isError } = useQuery(
    ["search", searchValue],
    async () => {
      return await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=UrgeI-BR8KCMwcVaLcmmcd130yqXAMBY9nEytB3EyHY`
      );
    },
    {
      onSuccess: (data) => {
        console.log(data.data.results);
        setImages(data.data.results);
      },
    }
  );

  if (isLoading || isFetching)
    return (
      <section className="image-container">
        <div>Loading...</div>
      </section>
    );
  if (isError)
    return (
      <section className="image-container">
        <div>Error...</div>
      </section>
    );

  return (
    <section className="image-container">
      {images.map((item) => {
        return (
          <img
            key={item.id}
            src={item.urls.regular}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
