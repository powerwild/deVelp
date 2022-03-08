import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDev } from '../../store/developers';
import { useHistory, useParams } from 'react-router-dom';

const UpdateDeveloper = ({ onClose }) => {
    const dispatch = useDispatch()
    const {id}  =useParams();
    const developer = useSelector((state) => state.developers[id])
    const history = useHistory();

    const icons = ['fa-solid fa-person', 'fa-solid fa-person-biking', "fa-solid fa-user-astronaut", "fa-solid fa-user-ninja", "fa-solid fa-skull", "fa-solid fa-person-dress", "fa-solid fa-user-tie", "fa-solid fa-user-secret"]

    const [name, setName] = useState(developer?.name);
    const [icon, setIcon] = useState(developer?.icon);
    const [bio, setBio] = useState(developer?.bio);
    const [city, setCity] = useState(developer?.city);
    const [state, setState] = useState(developer?.state);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let edited = await dispatch(updateDev(id, name, icon, bio, city, state));
        if (edited) {
            history.push(`/developers/${edited.id}`);
            onClose()
        }
    }

    return (
        <section className='edit-form'>
            <form onSubmit={handleSubmit}>
                <h2>Edit Developer</h2>
                <ul className='errors'>{errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}</ul>
                <input
                    type='text'
                    placeholder='Name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}>
                    {icons.map(ele =>
                        <option key={ele} value={ele}>{ele}</option>
                    )}
                </select>
                <i className={icon} />
                <textarea
                    placeholder='About Me'
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='City'
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='State'
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <button type='submit' disabled={errors.length > 0}>Submit</button>
            </form>
        </section>
    )
}

export default UpdateDeveloper