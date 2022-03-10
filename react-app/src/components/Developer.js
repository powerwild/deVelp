import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getAll } from '../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
import EditDevModal from './modals/EditDev';
import AddReviewModal from './modals/AddReviewModal';
import DeleteDevModal from './modals/DeleteDevModal';

function Developer({ user }) {
  const { id } = useParams();
  const developer = useSelector(state => state.developers[id])
  const allReviews = useSelector(state => state.reviews)

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const response = await dispatch(getAll(id))
    })();
  }, []);

  return developer ? (
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
        {developer.userId === user.id ? (
          <>
            <li>
              <EditDevModal />
            </li>
            <li>
              <DeleteDevModal />
            </li>
          </>
        ) : (
          <li>
            {developer.userId !== user.id && <AddReviewModal developer={developer} />}
          </li>
        )}
      </ul>
      {
        allReviews &&
        allReviews[developer.id]?.map(ele => (
          <Review key={ele.id} ele={ele} />
        ))
      }
    </>
  ) : <Redirect to='/developers' />;
}
export default Developer;
