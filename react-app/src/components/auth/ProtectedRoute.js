import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { allDevs } from '../../store/developers';
import { getSkillsThunk } from '../../store/skills';


const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {

    async function fetchData() {
      await dispatch(allDevs())
      await dispatch(getSkillsThunk())
    }
    fetchData();
  }, []);


  return (
    <Route {...props}>
      {(user)? props.children  : <Redirect to='/' />}
    </Route>
  )
};


export default ProtectedRoute;
