import { useState } from "react";

const ReviewCreate = (props) => {
  const [formData, setFormData] = useState({
    content: '',
    rating: ''
  });
  const { content, rating } = formData;
  const { handleCreateReview } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div>
      <h3>RATE & REVIEW</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateReview(formData);
      }}>
        <label>Review:
          <textarea
            type='text'
            name='content'
            placeholder='What did you think of the movie?'
            value={content}
            onChange={handleChange}
          />
        </label>
        <label>Rating:
          <select name='rating' value={rating} onChange={handleChange}>
            <option disabled value='default'>Select one</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </label>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default ReviewCreate;