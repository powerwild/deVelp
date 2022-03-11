import { deleteDev } from '../../store/developers';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const DeleteDevForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const developer = useSelector((state) => state.developers[id])
  const handleDelete = async (e) => {
    e.preventDefault();

    dispatch(deleteDev(developer))
      .then(() => {
        history.push(`/developers`)
      })
  }

  return (
    <div>
      <p>Are you sure you want to delete your Developer Profile?</p>
      <button onClick={handleDelete}>Yes</button>
    </div>
  )
}

export default DeleteDevForm
