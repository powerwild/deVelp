import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewDev } from '../../store/developers';
import { useHistory } from 'react-router-dom';


const NewDeveloperForm = ({ onClose }) => {
    const skillsList = useSelector(state => state.skills.skills)
    const dispatch = useDispatch();

    const history = useHistory();

    const icons = [['Person', 'fa-solid fa-person'], ['Biker', 'fa-solid fa-person-biking'], ['Astronaut', "fa-solid fa-user-astronaut"], ['Ninja', "fa-solid fa-user-ninja"], ['Skull', "fa-solid fa-skull"], ['Woman', "fa-solid fa-person-dress"], ['Suit', "fa-solid fa-user-tie"], ['Incognito', "fa-solid fa-user-secret"]]

    const [name, setName] = useState('')
    const [icon, setIcon] = useState('fa-solid fa-person')
    const [bio, setBio] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [skills, setSkills] = useState([]);
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(skills)
        let addDeveloper = await dispatch(addNewDev(name, icon, bio, city, state, skills));
        if (addDeveloper) {
            history.push(`/developers/${addDeveloper.id}`);
            onClose()
        }
    }

    const gatherSkills = (e) => {
        e.preventDefault();
        let skillArr = [...skills]
        if (!skillArr.includes(e.target.value)) skillArr.push(e.target.value)
        setSkills(skillArr)
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
                            <option key={ele} value={ele[1]}>{ele[0]}</option>
                            )}
                </select>
                <i className={icon} />
                <select multiple={true} value={skills} onChange={(e) => {
                    gatherSkills(e)
                    console.log(skills)}}>
                    {skillsList.map(skill => <option key={skill.id} value={skill.id}>{skill.name}</option>)}
                </select>
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
