import DeleteReviewForm from '../forms/DeleteReview';
import { FormModal } from '../../context/Modal';
import { useState } from 'react';

const DeleteReviewModal = ({id, developerId}) => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='delete' onClick={() => setRenderModal(true)}>Delete</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <DeleteReviewForm id={id} developerId={developerId} onClose={() => setRenderModal(false)}/>
                </FormModal>
                ) : null
            }
        </>
    )
};

export default DeleteReviewModal;
