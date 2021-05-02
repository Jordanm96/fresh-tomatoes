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
  }, [movies, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="heading">
        <h3>EDIT MOVIE</h3>
      </div>
      <form
        className="user-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id, formData);
        }}
      >
        <div className="inputs">
          <label className="login">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="login"
          />

          <label className="login">Director:</label>
          <input
            type="text"
            name="director"
            value={director}
            onChange={handleChange}
            className="login"
          />

          <label className="login">Plot Summary:</label>
          <textarea
            rows="10"
            type="text"
            name="info"
            value={info}
            onChange={handleChange}
            className="login"
          />

          <label className="login">Image URL:</label>
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
            className="login"
          />
          <button>SAVE CHANGES</button>
        </div>
      </form>
    </>
  );
};

export default MovieEdit;
