import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getAll } from '../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
import EditDevModal from './modals/EditDev';
import AddReviewModal from './modals/AddReviewModal';
import DeleteDevModal from './modals/DeleteDevModal';
import './Developer.css'

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
      <div className='dev-container'>
        <ul>
          <div className='Dev-id'>
            <li>
              <strong>User Id</strong> {developer && developer.id}
            </li>
          </div>
          <div className='Dev-name'>
            <li>
              <strong>Username</strong> {developer && developer.name}
            </li>
          </div>
          <div className='Dev-bio'>
            <li>
              <strong>Bio</strong> {developer && developer.bio}
            </li>
          </div>
          {developer.userId === user.id ? (
            <div className='dev-button-container'>
              <div>
                <EditDevModal />
              </div>
              <div>
                <DeleteDevModal />
              </div>
            </div>
          ) : (
            <div>
              {developer.userId !== user.id && <AddReviewModal developer={developer} />}
            </div>
          )}
        </ul>
      </div>
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
