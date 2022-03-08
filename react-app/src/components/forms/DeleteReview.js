import { deleteOne } from '../../store/reviews';
import { useDispatch } from 'react-redux';

const DeleteReviewForm = ({id, developerId, onClose}) => {
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(deleteOne(id, developerId)).then(onClose())
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Delete Your Review?</p>
            <button>Yes</button>
        </form>
    )
}

export default DeleteReviewForm
