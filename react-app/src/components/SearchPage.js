import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function SearchPage() {
  const devs = useSelector(state => state.developers);
  const [ searchedDevs, setSearchedDevs ] = useState([]);
  const [ pageLoaded, setPageLoaded ] = useState(false)
  const { param } = useParams();
  let searchParam = [];
  if (param.includes(', ')) searchParam.concat(param.split(', '));
  else searchParam.push(param);

  useEffect(() => {
    let wanted_devs;
    if (searchParam.length > 1) {
        wanted_devs = devs.map(dev => {
            if (dev.city.lower() === searchParam[0].lower() && dev.state.lower() === searchParam[1].lower()) return dev
        })
    } else {
        wanted_devs = devs.map(dev => {
            if (dev.state.lower() === searchParam[0]) return dev
        })
    }
    setSearchedDevs(wanted_devs)
    setPageLoaded(true)
  }, [])

  const devsComponents = searchedDevs?.map((dev) => {
    return (
      <li key={dev.id}>
        <NavLink to={`/developers/${dev.id}`}>{dev.name}</NavLink>
      </li>
    );
  });

  return (
      <>
      {pageLoaded &&
      <>
        <h1>Search Results : </h1>
        <ul>{devsComponents}</ul>
      </>
      }
    </>
  );
}

export default SearchPage;
