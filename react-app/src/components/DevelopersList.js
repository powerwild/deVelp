import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allDevs } from '../store/developers';

function DevelopersList() {
  const developers = useSelector((state) => state.developers);
  console.log(developers)


  // useEffect(() => {

  //   async function fetchData() {
  //     const response = await dispatch(allDevs())
  //     setDevelopers(response);
  //   }
  //   fetchData();
  // }, []);


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
