import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Developer.css'

function SearchPage() {
  const devs = useSelector(state => state.developers);
  const [ searchedDevs, setSearchedDevs ] = useState([]);
  const [ pageLoaded, setPageLoaded ] = useState(false)
  const { params } = useParams();

  useEffect(() => {
    let searchParam = [];
    if (params.includes(', ')) searchParam = params.split(', ');
    else searchParam.push(params);
    let wanted_devs;
    if (searchParam.length > 1) {
        wanted_devs = Object.values(devs).filter(dev => dev.city.toLowerCase() === searchParam[0].toLowerCase() && dev.state.toLowerCase() === searchParam[1].toLowerCase())
    } else {
        wanted_devs = Object.values(devs).filter(dev => dev.state.toLowerCase() === searchParam[0].toLowerCase())
    }
    setSearchedDevs(wanted_devs);
    setPageLoaded(true);
  }, [params, devs])

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
        <h1 className='search-return'>{searchedDevs.length > 0 ? 'Search Results' : 'No Devs match your search' }</h1>
        <ul className='search-name'>{devsComponents}</ul>
      </>
      }
    </>
  );
}

export default SearchPage;
