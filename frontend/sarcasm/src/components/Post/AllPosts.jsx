import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import './Post.css';

const AllPosts = () => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const url = "http://192.168.20.21:8000/api/posts/";
    const response = await fetch(url);
    const data = await response.json();
    setApiData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (

    <>
      <dir className="container">
        <h1>Leads Public Wall</h1>
        <hr className='w-50 ml-0' />
        <div className='row'>
           {apiData.length > 0 ? (
            apiData.map((post) => (
              <Posts key={post.id} post={post} />
            ))
          ) : (
            <p className='well'>No posts available</p>
          )}
        </div>
      </dir>
    </>
  );
};

export default AllPosts;