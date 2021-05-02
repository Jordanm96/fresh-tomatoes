import { useState } from "react";

const MovieCreate = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    info: "",
    image_url: "",
  });
  const { title, director, info, image_url } = formData;
  const { handleCreateMovie } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <>
      <div className='heading'>
      <h3>ADD A MOVIE</h3>
      </div>
      <form className='user-form' onSubmit={(e) => {
        e.preventDefault();
        handleCreateMovie(formData);
      }}>
                <div className='inputs'>

        <label className= 'login'>
          Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className= 'login'
          />

        <label className= 'login'>
          Director:
          </label>
          <input
            type="text"
            name="director"
            value={director}
            onChange={handleChange}
            className= 'login'
          />

        <label className= 'login'>
          Plot Summary:
          </label>
          <textarea
            type="text"
            rows="10"
            name="info"
            value={info}
            onChange={handleChange}
            className='textarea'
            // className='login'
            // rows={20}
          />

        <label className= 'login'>
          Image URL:
          </label>
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
            className= 'login'
          />
        <button>CREATE</button>
        </div>

      </form>
    </>
  );
};

export default MovieCreate;
