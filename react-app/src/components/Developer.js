import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAll } from '../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
import AddReviewModal from './modals/AddReviewModal'

function Developer({user}) {
  const { id } = useParams();
  let allDevs = useSelector( state => state.developers )
  let allTheReviews = useSelector( state => state.reviews )
  const developer = allDevs[id]
  let allReviews = allTheReviews[developer.id]

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const response = await dispatch(getAll(id))
    })();
  }, []);

  return (
    <>
      <ul>
        <li>
          <strong>User Id</strong> {developer && developer.id}
        </li>
        <li>
          <strong>Username</strong> {developer && developer.name}
        </li>
        <li>
          <strong>Bio</strong> {developer && developer.bio}
        </li>
        <li>
          <AddReviewModal developer={developer} />
        </li>
      </ul>
      {
        allReviews &&
        allReviews?.map(ele => (
          <Review key={ele.id} ele={ele} />
        ))
      }
    </>
  );
}
export default Developer;
