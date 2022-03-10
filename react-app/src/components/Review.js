import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditReviewModal from './modals/EditReviewModal'
import DeleteReviewModal from './modals/DeleteReviewModal'
import './Review.css'

function Review({ ele }) {
  let curUser = useSelector(state => state.session.user)
  const { id } = useParams();
  let allDevs = useSelector(state => state.developers)
  const developer = allDevs[id]

  return (
    <div className='outer-style-div'>
      <ul className='review'>
          {/* <h2>This is a review!:</h2> */}
          <div className='review-li'>
            <li>
              <strong>Review:</strong> {ele.body}
            </li>
            <li>
              <strong>Rating:</strong> {ele.rating}
            </li>
            <li>
              <strong>Username:</strong> {ele.username}
            </li>
          </div>
          <div className='button-container'>
            {
              ele.userId === curUser.id &&
              <>
                <EditReviewModal reviewId={ele.id} rating={ele.rating} body={ele.body} />
                <DeleteReviewModal id={ele.id} developerId={ele.developerId} />
              </>
            }
          </div>
      </ul>
    </div>
  );
}
export default Review;
