import DeleteDevForm from '../forms/DeleteDev';
import { FormModal } from '../../context/Modal';
import { useState } from 'react';

const DeleteDevModal = ({id}) => {
    const [ renderModal, setRenderModal ] = useState(false);


    return (
        <>
            <button className='delete-dev' onClick={() => setRenderModal(true)}>Delete</button>
            {renderModal ? (
                <FormModal onClose={() => setRenderModal(false)}>
                    <DeleteDevForm id={id} onClose={() => setRenderModal(false)}/>
                </FormModal>
                ) : null
            }
        </>
    )
};

export default DeleteDevModal;