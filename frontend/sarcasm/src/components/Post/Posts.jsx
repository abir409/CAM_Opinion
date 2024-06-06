import React, { useState, useEffect } from 'react';
import anonym from '../../images/anonym.png';
import Sentiment from 'sentiment';
import ReactTimeAgo from 'react-time-ago';
import CommentModal from '../Comment Modal/CommentModal';

const Posts = ({ post }) => {
    const [sentiment, setSentiment] = useState(null);
    const [showModal, setShowModal] = useState(false);


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

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container mt-5">
        <div className="comment-card">
            <div className="comment-header">
                <div className="comment-avatar">
                    <img src={anonym} alt="Avatar"/>
                </div>
                <div className="comment-info">
                    <div className="comment-username">@Anonymous</div>
                    <div className="comment-time">2 years ago</div>
                </div>
            </div>
            <div className="comment-body">
                lorem*50

            </div>
            <div className="comment-actions">
                <button className="comment-reply">Reply</button>
            </div>
        </div>
    </div>
    
    );
}

export default Posts;
