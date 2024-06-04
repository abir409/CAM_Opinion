import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CommentModal.css'

function CommentModal({ show, onHide, test }) {
  console.log(test);
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='comment-wrapper'>
        <textarea name="comment" className='comment'>
        </textarea>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CommentModal;