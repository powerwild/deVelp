import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Developer.css'

function DevelopersList() {
  const developers = useSelector((state) => state.developers);

  const devsComponents = Object.values(developers)?.map((dev) => {
    return (
      <div key={dev.id} className='Dev-list-single'>
        <div className="inner-single-dev">
          <div>
            <i className={`dev-icon ${dev.icon}`} />
            <NavLink to={`/developers/${dev.id}`}>{dev.name}</NavLink>
          </div>
          <p>{dev.skills.join(", ")}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className='developers-title'>Developers </h1>
      <div className='Dev-list'>
        <div>{devsComponents}
        </div>
      </div>
    </>
  );
}

export default DevelopersList;
