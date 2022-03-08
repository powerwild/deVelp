import ReviewForm from '../forms/ReviewForm';
import { FormModal } from '../../context/Modal';
import { useState } from 'react';

const AddReviewModal = () => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='' onClick={() => setRenderModal(true)}>Login</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <ReviewForm />
                </FormModal>
                ) : null
            }
        </>
    )
};

export default AddReviewModal;
