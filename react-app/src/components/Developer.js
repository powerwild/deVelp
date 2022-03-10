import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getAll } from '../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
import EditDevModal from './modals/EditDev';
import AddReviewModal from './modals/AddReviewModal';
import DeleteDevModal from './modals/DeleteDevModal';
import './Developer.css'
import SimpleMap from './GoogleMap';
import Geocode from "react-geocode";

function Developer({ user }) {
  const { id } = useParams();
  const developer = useSelector(state => state.developers[id])
  const allReviews = useSelector(state => state.reviews)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const response = await dispatch(getAll(id))
    })();
  }, []);

  Geocode.setApiKey("AIzaSyBiQq5Z8o8i2sbzKNIitbGVQ27bWWuw23I");

  Geocode.fromAddress(`${developer.city}, ${developer.state}`).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLatitude(lat);
      setLongitude(lng);
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );

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
        longitude &&
        <SimpleMap lat={latitude} lng={longitude} />
      }
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
