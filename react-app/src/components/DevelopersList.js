import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Developer.css'

function DevelopersList() {
  const developers = useSelector((state) => state.developers);

  const devsComponents = Object.values(developers)?.map((dev) => {
    return (
      <div className='Dev-list-single'>
        <i className={`dev-icon ${dev.icon}`} />
      <p key={dev.id}>
        <NavLink to={`/developers/${dev.id}`}>{dev.name}</NavLink>
      </p>
      <p>{dev.skills}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Developer's: </h1>
      <div className='Dev-list'>
      <p>{devsComponents}
      </p>
      </div>
    </>
  );
}

export default DevelopersList;
