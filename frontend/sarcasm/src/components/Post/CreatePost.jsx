import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import Filter from 'bad-words';


const CreatePost = () => {
  const [comment, setComment] = useState('');
  const [sentiment, setSentiment] = useState(null);

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

    if(comment.trim().length > 350){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Character limit exceeded. 350 characters only.",
      });
      return;
    }

    // Check for slang words
    const filter = new Filter();
    if (filter.isProfane(comment)) {
      Swal.fire({
        title: 'Warning!',
        text: 'The comment contains inappropriate language.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }


    // Proceed with posting the comment
    const postData = { "post_content": comment };
    const url = "http://192.168.20.21:8000/api/posts/";

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
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

  const textareaStyle = {
    backgroundColor: '#2b3a52',
    color: '#d6d663',
    width: '100%',
    height: '150px', // Fixed height
    boxSizing: 'border-box',
    resize: 'none', // Prevent resizing
    padding: '10px', // Add some padding
    position: 'relative' // Ensure relative positioning for the counter
  };

  const counterStyle = {
    position: 'absolute',
    bottom: '10px', // Adjust as needed
    right: '10px', // Adjust as needed
    color: '#d6d663',
    fontSize: '12px' // Adjust as needed
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <form onSubmit={handleFormSubmit} className="w-50">
        <div className="form-group">
          <label htmlFor="opinion">
            <h1 className="c-primary">Write your opinion anonymously</h1>
            <hr />
          </label>
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <textarea
              className="form-control"
              id="opinion"
              rows="3"
              style={textareaStyle}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div style={counterStyle}>{comment.length} / 350</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <input className="btn btn-primary btn-lg w-20" type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
