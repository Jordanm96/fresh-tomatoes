import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieEdit = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    info: "",
    image_url: "",
  });
  
  const { title, director, info, image_url } = formData;
  const { movies, handleEdit } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const movieData = movies.find((movie) => movie.id === Number(id));
      setFormData({
        title: movieData.title,
        director: movieData.director,
        info: movieData.info,
        image_url: movieData.image_url,
      });
    };
    if (movies.length) {
      prefillFormData();
    }
  }, [movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <h3>EDIT MOVIE</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id, formData);
        }}
      >
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>

        <label>
          Director:
          <input
            type="text"
            name="director"
            value={director}
            onChange={handleChange}
          />
        </label>

        <label>
          Plot Summary:
          <input type="text" name="info" value={info} onChange={handleChange} />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </label>
        <button>SAVE CHANGES</button>
      </form>
    </div>
  );
};

export default MovieEdit;
