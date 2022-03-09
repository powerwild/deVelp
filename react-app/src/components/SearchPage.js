import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function SearchPage() {
  const devs = useSelector(state => state.developers);
  const [ searchedDevs, setSearchedDevs ] = useState([]);
  const [ pageLoaded, setPageLoaded ] = useState(false)
  const { params } = useParams();
  let searchParam = [];
  if (params.includes(', ')) searchParam.concat(params.split(', '));
  else searchParam.push(params);

  useEffect( async () => {
    let wanted_devs;
    if (searchParam.length > 1) {
        wanted_devs = Object.values(devs).filter(dev => dev.city.toLowerCase() === searchParam[0].toLowerCase() && dev.state.toLowerCase() === searchParam[1].toLowerCase())
    } else {
        wanted_devs = Object.values(devs).filter(dev => dev.state.toLowerCase() === searchParam[0].toLowerCase())
    }
    await setSearchedDevs(wanted_devs);
    setPageLoaded(true);
  }, [params])

  console.log(searchedDevs)
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
