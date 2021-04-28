import { useState } from "react";
import { useHistory } from "react-router-dom";

const MovieCreate = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    info: "",
    image_url: "",
  });
  const { title, director, info, image_url } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div>
      <h3>ADD A MOVIE</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}>
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
          <input
            type="text"
            name="info"
            value={info}
            onChange={handleChange}
          />
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
        <button>CREATE</button>
      </form>
    </div>
  );
};

export default MovieCreate;
