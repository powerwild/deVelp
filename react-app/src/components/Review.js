import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditReviewModal from './modals/EditReviewModal'

function Review({ ele }) {
  let curUser = useSelector( state => state.session.user )
  const { id } = useParams();
  let allDevs = useSelector( state => state.developers )
  const developer = allDevs[id]

  return (
    <ul className='review'>
      <h2>This is a review!:</h2>
      <li>
        <strong>Body</strong> {ele.body}
      </li>
      <li>
        <strong>Rating</strong> {ele.rating}
      </li>
      <li>
        <strong>Username</strong> {ele.username}
      </li>
      {
        ele.userId === curUser.id &&
        <>
          <EditReviewModal reviewId={ele.id} rating={ele.rating} body={ele.body} />
          <button>Delete</button>
        </>
      }
    </ul>
  );
}
export default Review;
