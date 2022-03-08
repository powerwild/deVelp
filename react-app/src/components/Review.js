import React from 'react';

function Review({ ele }) {

  return (
    <ul>
      <h2>This is a review!:</h2>
      <li>
        <strong>Body</strong> {ele.body}
      </li>
      <li>
        <strong>Rating</strong> {ele.rating}
      </li>
      <li>
        <strong>UserId</strong> {ele.username}
      </li>
    </ul>
  );
}
export default Review;
