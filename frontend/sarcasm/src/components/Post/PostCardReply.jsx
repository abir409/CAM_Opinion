import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

const PostCardReply = ({ id, img }) => {
    const textAreaRef = useRef(null);
    const [textAreaVal, setTextAreaVal] = useState("");
    const [replies, setReplies] = useState([]);
    const [showInput,setInput] = useState(false)
    const [showHideReply, setShowHideReply] = useState(replies.length > 0)

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

    const handleCancelButton = (e) => {
        setTextAreaVal('');
        setInput((prev) => !prev)
    };

    // const hadleCancelButton = (e)={
    //     set
    // }

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
                setShowHideReply((val)=>true)
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
            <div className="comment-actions">
                <button className="comment-reply" onClick={() => setInput((prev) => !prev)}>Reply</button>
            </div>
            <div className={`reply-wrapper${showInput ?' reply-wrapper-show':''}`}>
                <div className="reply-input">
                    <div className="reply-avatar">
                        <img src={img} alt="Avatar" />
                    </div>
                    <textarea name="" id="" placeholder='Add a reply...' value={textAreaVal} onChange={(e)=>setTextAreaVal(e.target.value)} rows={1} ref={textAreaRef}></textarea>
                </div>
                {/* setTextAreaVal(() => '') */}
                <div className='reply-button mt-2 row justify-content-end'>
                    <button className='btn btn-secondary btn-sm' onClick={handleCancelButton}  >Cancel</button>
                    <button className={`btn btn-primary btn-sm ml-3 ${textAreaVal == '' ? ' disabled' : ''}`} value={id} onClick={textAreaVal== ''? null : handleReply}>Reply</button>
                </div>
            </div>

            {/* show comments of this post */}
            <div className='show-comment'>
                {replies.length > 0 && <button className='view-comment' onClick={()=> setShowHideReply((val)=>!val)}>{replies.length} replies</button>}
                {replies.map((reply, index) => (
                    <div className={` ${showHideReply  ? '' : 'hide-comment' }`} key={index}>
                        <div><img src={img} alt="anonym" /> {reply.comment_content}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PostCardReply;