import DeleteReview from '../forms/DeleteReview';
import { FormModal } from '../../context/Modal';
import { useState } from 'react';

const DeleteReviewModal = ({id}) => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='' onClick={() => setRenderModal(true)}>Login</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <DeleteReview id={id} onClose={() => setRenderModal(false)}/>
                </FormModal>
                ) : null
            }
        </>
    )
};

export default DeleteReviewModal;
