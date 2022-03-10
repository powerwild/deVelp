import UpdateDeveloper from '../forms/EditDev';
import { FormModal } from '../../context/Modal';
import { useState } from 'react';

const EditDevModal = ({rating, body}) => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='edit-dev' onClick={() => setRenderModal(true)}>Edit</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <UpdateDeveloper onClose={() => setRenderModal(false)} rev_rating={rating} rev_body={body} />
                </FormModal>
                ) : null
            }
        </>
    )
};

export default EditDevModal;