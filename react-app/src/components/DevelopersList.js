import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function DevelopersList() {
  const developers = useSelector((state) => state.developers);

  const devsComponents = Object.values(developers)?.map((dev) => {
    return (
      <li key={dev.id}>
        <NavLink to={`/developers/${dev.id}`}>{dev.name}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Developer's List: </h1>

      <ul>{devsComponents}</ul>
    </>
  );
}

export default DevelopersList;
