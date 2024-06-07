import React from 'react';
import ReactTimeAgo from 'react-time-ago';

const PostCardBody = ({img,post,created_at}) => {
    return (
        <>
            <div className="comment-header">
                <div className="comment-avatar">
                    <img src={img} alt="Avatar" />
                </div>
                <div className="comment-info">
                    <div className="comment-username">@Anonymous</div>
                    <div className="comment-time">
                        <ReactTimeAgo date={created_at} locale="en-US" />
                    </div>
                </div>
            </div>
            <div className="comment-body">
                {post}

            </div>
        </>
    )
}

export default PostCardBody;
