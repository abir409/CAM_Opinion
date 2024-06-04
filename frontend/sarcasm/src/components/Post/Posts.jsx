import React, { useState, useEffect } from 'react';
import anonym from '../../images/anonym.png';
import Sentiment from 'sentiment';
import ReactTimeAgo from 'react-time-ago';
import CommentModal from '../Comment Modal/CommentModal';

const Posts = ({ post }) => {
    const [sentiment, setSentiment] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <div className="col-md-6 mb-3">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="circle-img-wrapper">
                            <img src={anonym} className="circle-img" alt="Image" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="card-body-content">
                                {/* <h5 className="card-title">Card Title</h5> */}
                                <p className="card-text">{post.post_content}</p>
                            </div>
                            <div className="card-footer">
                                <p className="card-text mb-0"><small className="text-muted"><ReactTimeAgo date={post.created_at} locale="en-US" /></small></p>
                                <div>
                                        <button className="btn btn-light btn-sm" onClick={()=><CommentModal show={show} handleShow={()=>{handleShow()}} Close={()=>{handleClose()}}/> }>
                                        <i className="fas fa-comment" ></i>
                                    </button>
                                    <button className="btn btn-light btn-sm">
                                        <i className="fas fa-list"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Posts;
