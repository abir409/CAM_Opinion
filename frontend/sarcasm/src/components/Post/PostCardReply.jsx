import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

const PostCardReply = ({ id, img }) => {
    const textAreaRef = useRef(null);
    const [textAreaVal, setTextAreaVal] = useState("");
    const [replies, setReplies] = useState([]); 

    useEffect(() => {
        // fetch previous comments when the component mounts
        const url = `http://192.168.20.21:8000/api/posts/comments/${id}/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setReplies(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setTextAreaVal(e.target.value);
    };

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [textAreaVal]);

    const handleReply = (e) => {
        e.preventDefault();
        const post_id = e.target.value;
        console.log(post_id);
        const postData = { "comment_content": textAreaVal, "post": post_id };
        const url = `http://192.168.20.21:8000/api/posts/comments/${post_id}/`;

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
                setTextAreaVal('');
                
                setReplies([data, ...replies]); 
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
        <>
            <div className='reply-input'>
                <div className="reply-avatar">
                    <img src={img} alt="Avatar" />
                </div>
                <textarea name="" id="" placeholder='Add a reply...' value={textAreaVal} onChange={handleChange} rows={1} ref={textAreaRef}></textarea>
            </div>
            <div className="comment-actions">
                <button className="comment-reply" value={id} onClick={handleReply}>Reply</button>
            </div>
            {/* show comments of this post */}
            <div>
                {replies.length > 0 && <p>{replies.length} replies</p>} 
                {replies.map((reply, index) => (
                    <div key={index}>
                        <p>{reply.comment_content}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PostCardReply;