import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createOne, editOne } from '../../store/reviews'


const ReviewForm = ({rev_body, rev_rating, onClose, developerId, reviewId}) => {
    const [body, setBody] = useState(rev_body || '');
    const [rating, setRating] = useState(rev_rating || '1');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let sent_data;
        if (rev_body) {
            sent_data = await dispatch(editOne(body, rating, reviewId))
          } else {
            sent_data = await dispatch(createOne(body, rating, developerId))
        }
        if (sent_data) {
            console.log(sent_data)
          if (sent_data?.errors) return setErrors(sent_data.errors)
          else onClose()
        } else onClose()
    }

    useEffect(() => {
        setErrors([]);
    }, [rating, body])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {Object.entries(errors).map((error) => (
                <div key={error[0]}>{error[1]} Review</div>
                ))}
            </div>
            <div>
                <label htmlFor='rating'>Rating</label>
                <select onChange={(e) => setRating(e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <div>
                <label htmlFor='body'>Review</label>
                <textarea
                className='review-textarea'
                name='body'
                placeholder='Your review here...'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <button disabled={errors.length > 0}>Submit</button>
            </div>
        </form>
    )
}


export default ReviewForm;
