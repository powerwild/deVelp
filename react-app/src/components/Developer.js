import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Developer() {
  const [developer, setDeveloper] = useState({});
  const { id }  = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/developers/${id}`);
      const dev = await response.json();
      setDeveloper(dev);
    })();
  }, [id]);

  if (!developer) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {developer.id}
      </li>
      <li>
        <strong>Username</strong> {developer.username}
      </li>
      <li>
        <strong>Email</strong> {developer.email}
      </li>
    </ul>
  );
}
export default Developer;
