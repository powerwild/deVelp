import { deleteOne } from '../../store/developers';
import { useDispatch } from 'react-redux';

const DeleteReviewForm = ({id, onClose}) => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        await dispatch(deleteOne(id)).then(onClose())
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Delete Your Review?</p>
            <button>Yes</button>
        </form>
    )
}
