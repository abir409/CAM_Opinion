import React from 'react';
import anonymonus from '../../images/anonymous.png';


const Posts = ({ post }) => {

  return (


    
      <div className="col-md-4">
        <div className="card-container">
          <div className="card card-custom">
            <div className="card-front card-body">
              <img src={anonymonus} alt="Card Image 1"/>
            </div>
            <div className="card-back card-body">
             
              <p className="card-text">{post.post_content}</p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Posts;