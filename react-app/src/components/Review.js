import React from 'react';
import { useSelector } from 'react-redux';

function Review({ ele }) {
  let curUser = useSelector( state => state.session.user )

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
          <button>Edit</button>
          <button>Delete</button>
        </>
      }
    </ul>
  );
}
export default Review;
