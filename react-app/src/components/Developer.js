import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAll } from '../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
import { allDevs } from '../store/developers';

function Developer() {
  const { id } = useParams();
  let allDevs = useSelector( state => state.developers )
  const developer = allDevs[id]

  const dispatch = useDispatch();

  const [allReviews, setAllReviews] = useState();
  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const response = await dispatch(getAll(id))
      setAllReviews(response.reviews)
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
