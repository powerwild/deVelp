import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Developer.css'

function DevelopersList() {
  const developers = useSelector((state) => state.developers);

  const devsComponents = Object.values(developers)?.map((dev) => {
    return (
      <NavLink to={`/developers/${dev.id}`} className='Dev-list-single' key={dev.id}>
        <div className="inner-single-dev">
          <div>
            <i className={`dev-icon ${dev.icon}`} />
            <div>{dev.name}</div>
          </div>
          <p>{dev.skills.join(", ")}</p>
        </div>
      </NavLink>
    );
  });

  return (
    <>
      <h1 className='developers-title'>Developers </h1>
      <div className='Dev-list'>
        <div>{devsComponents}</div>
      </div>
    </>
  );
}

export default DevelopersList;
