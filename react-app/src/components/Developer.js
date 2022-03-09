import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getAll } from '../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';

import { allDevs } from '../store/developers';
import EditDevModal from './modals/EditDev'

import AddReviewModal from './modals/AddReviewModal'
import DeleteDevModal from './modals/DeleteDevModal';

function Developer({user}) {
  const { id } = useParams();
  let state = useSelector( state => state)
  let developer = state.developers[id]
  console.log("allDEVSSS", allDevs)
  // useEffect(() => {
    if (!developer) {
      return (
        <Redirect to='/developers' />
        )
      }
    // }, [developer])
    // const developer = allDevs[id]
    // let allReviews = allTheReviews[developer.id]
    
  let allReviews = state.reviews[developer.id]
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
          <EditDevModal />
        </li>
          <DeleteDevModal />
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
