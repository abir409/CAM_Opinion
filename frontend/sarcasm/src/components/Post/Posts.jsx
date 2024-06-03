import React, { useState, useEffect } from 'react';
import anonymonus from '../../images/anonymous.png';
import Sentiment from 'sentiment';

const Posts = ({ post }) => {
  const [sentiment, setSentiment] = useState(null);

  useEffect(() => {
    // Analyze sentiment using Sentiment.js
    const sentimentAnalyzer = new Sentiment();
    const result = sentimentAnalyzer.analyze(post.post_content);
    const sentimentScore = result.score;

    let sentimentType = 'Neutral';
    if (sentimentScore > 0) {
      sentimentType = 'Positive';
    } else if (sentimentScore < 0) {
      sentimentType = 'Negative';
    }
    setSentiment(sentimentType);
  }, [post.post_content]); 

  return (
    <div className="col-md-4">
      <div className="card-container">
        <div className="card card-custom">
          
          <div className="card-front card-body position-relative">
            <p className="sentiment-text">{sentiment}</p>
            <img src={anonymonus} alt="Card Image 1" />
          </div>
          <div className="card-back card-body">
            <p className="card-text">{post.post_content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
