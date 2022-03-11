import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      await dispatch(getAll(id))
    })();
  }, [dispatch, id]);

  Geocode.setApiKey(process.env.REACT_APP_GEOCODE_API_KEY);


  if (developer?.city) {
    Geocode.fromAddress(`${developer.city}, ${developer.state}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      },
      (error) => {
        setLatitude(-36.375381);
        setLongitude(-137.682543);
      }
    )
  }


      return developer ? (
    <>
      <div className='dev-container'>
        {console.log(developer)}
        <ul className='dev-details'>
          <i className={`dev-icon ${developer.icon}`} />
          <div className='Dev-name'>
            <li>
              <strong>Developer Name: </strong> {developer && developer.name}
            </li>
          </div>
          <div className='Dev-bio'>
            <li>
              <strong>Bio: </strong> {developer && developer.bio}
            </li>
          </div>
          {developer.userId === user.id && (
            <div className='dev-button-container'>
              <div>
                <EditDevModal />
              </div>
              <div>
                <DeleteDevModal />
              </div>
            </div>
          )}
        </ul>
      </div>
        <div className='skills-map'>
          <ul className='dev-skills'>
            <strong>Skills</strong>
            <div className='dev-skills-div'>
              {developer.skills.map(skill => {
                      return <li>{skill}</li>
                    })}
            </div>
          </ul>
          {
            longitude &&
            <SimpleMap lat={latitude} lng={longitude} />
          }
        </div>
      <div className='review-modal-btn'>
        {developer.userId !== user.id && <AddReviewModal developer={developer} />}
      </div>
      {
        allReviews &&
        allReviews[developer.id]?.map(ele => (
          <Review key={ele.id} ele={ele} />
        ))
      }
    </>
  ) : null
}
export default Developer;
