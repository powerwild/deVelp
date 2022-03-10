import ReviewForm from '../forms/ReviewForm';
import { FormModal } from '../../context/Modal';
import { useState } from 'react';

const EditReviewModal = ({rating, body, reviewId}) => {
    const [ renderModal, setRenderModal ] = useState(false);

    return (
        <>
            <button className='edit' onClick={() => setRenderModal(true)}>Edit</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <ReviewForm onClose={() => setRenderModal(false)} rev_rating={rating} rev_body={body} reviewId={reviewId} />
                </FormModal>
                ) : null
            }
        </>
    )
};

export default EditReviewModal;
