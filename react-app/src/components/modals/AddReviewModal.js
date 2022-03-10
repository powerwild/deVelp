import ReviewForm from '../forms/ReviewForm';
import { FormModal } from '../../context/Modal';
import { useState } from 'react';

const AddReviewModal = ({ developer }) => {
    const [ renderModal, setRenderModal ] = useState(false);
    const developerId = developer.id

    return (
        <>
            <button className='addReview-button' onClick={() => setRenderModal(true)}>Add Review</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <ReviewForm onClose={() => setRenderModal(false)} developerId={developerId} />
                </FormModal>
                ) : null
            }
        </>
    )
};

export default AddReviewModal;
