import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewDev } from '../../store/developers';
import { useHistory } from 'react-router-dom';


const NewDeveloperForm = ({ onClose }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const history = useHistory();

    // const icons = ["🧛‍♂️", "🎅", "👩‍🦳", "👨‍🦰"]
    const icons = [['Person', 'fa-solid fa-person'], ['Biker', 'fa-solid fa-person-biking'], ['Astronaut', "fa-solid fa-user-astronaut"], ['Ninja', "fa-solid fa-user-ninja"], ['Skull', "fa-solid fa-skull"], "fa-solid fa-person-dress", "fa-solid fa-user-tie", "fa-solid fa-user-secret"]

    const [name, setName] = useState('')
    const [icon, setIcon] = useState('fa-solid fa-person')
    const [bio, setBio] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        let addDeveloper = await dispatch(addNewDev(name, icon, bio, city, state));
        if (addDeveloper) {
            history.push(`/developers/${addDeveloper.id}`);
            onClose()
        }
    }

    return (
        <section className='new-dev-form'>
            <form onSubmit={handleSubmit}>
                <h2>New Developer</h2>
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

export default NewDeveloperForm;
