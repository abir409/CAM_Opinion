import React, { useState, useEffect, useRef } from 'react';
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
    const textAreaRef = useRef(null)
    const [val, setVal] = useState("")
    const handleChange = (e) => {
        setVal(e.target.value)
    }
    useEffect(() => {
        textAreaRef.current.style.height = "auto"
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"

    }, [val])

    return (
        <div className="container mt-5">
            <div className="comment-card">
                <div className="comment-header">
                    <div className="comment-avatar">
                        <img src={anonym} alt="Avatar" />
                    </div>
                    <div className="comment-info">
                        <div className="comment-username">@Anonymous</div>
                        <div className="comment-time">
                            <ReactTimeAgo date={post.created_at} locale="en-US" />
                        </div>
                    </div>
                </div>
                <div className="comment-body">
                    {post.post_content}

                </div>
                <div className="comment-actions">
                    <button className="comment-reply">Reply</button>
                </div>
                <div className='reply-input'>
                    <div className="reply-avatar">
                        <img src={anonym} alt="Avatar" />
                    </div>
                    <textarea name="" id="" placeholder='Add a reply...' value={val} onChange={handleChange} rows={1} ref={textAreaRef}></textarea>
                </div>
            </div>
        </div>

    );
}

export default Posts;
