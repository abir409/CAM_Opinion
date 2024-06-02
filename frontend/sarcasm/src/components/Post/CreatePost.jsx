import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const CreatePost = () => {
  const [comment, setComment] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    // Validate the comment
    if (comment.trim() === '') {
      Swal.fire({
        title: 'Validation Error',
        text: 'The opinion field cannot be empty.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    const postData = { "post_content": comment };
    const url = "http://192.168.20.21:8000/api/posts/";

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      Swal.fire({
        title: 'Success!',
        text: 'Your opinion has been posted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setComment(''); // Clear the comment
    })
    .catch((error) => {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error posting your opinion.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form onSubmit={handleFormSubmit} className="w-50">
        <div className="form-group">
          <label htmlFor="opinion">
            <h1 className="c-primary">Write your opinion anonymonusly</h1>
            <hr />
          </label>
          <textarea
            className="form-control"
            id="opinion"
            rows="3"
            style={{ backgroundColor: '#2b3a52', color: '#d6d663' }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <input className="btn btn-primary btn-lg w-20" type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
