import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDev } from '../../store/developers';
import { useHistory, useParams } from 'react-router-dom';

const UpdateDeveloper = ({ onClose }) => {
    const skillsList = useSelector(state => state.skills.skills)
    const dispatch = useDispatch()
    const { id } = useParams();
    const developer = useSelector((state) => state.developers[id])
    const history = useHistory();

    const icons = ['fa-solid fa-person', 'fa-solid fa-person-biking', "fa-solid fa-user-astronaut", "fa-solid fa-user-ninja", "fa-solid fa-skull", "fa-solid fa-person-dress", "fa-solid fa-user-tie", "fa-solid fa-user-secret"]

    const [name, setName] = useState(developer?.name);
    const [icon, setIcon] = useState(developer?.icon);
    const [bio, setBio] = useState(developer?.bio);
    const [city, setCity] = useState(developer?.city);
    const [state, setState] = useState(developer?.state);
    const [skills, setSkills] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let oldSkills = [];
        skillsList.map(skill => {
            if (developer.skills.includes(skill.name)) oldSkills.push(`${skill.id}`)
            return true;
        })
        setSkills(oldSkills)
    }, [developer.skills, skillsList])

    const handleSubmit = async (e) => {
        e.preventDefault();

        let edited = await dispatch(updateDev(id, name, icon, bio, city, state, skills));
        if (edited?.errors) return setErrors(edited.errors)
        if (edited) {
            history.push(`/developers/${edited.id}`);
            onClose()
        }
    }

    const gatherSkills = (e) => {
        e.preventDefault();
        let skillArr = [...skills]
        if (!skillArr.includes(e.target.value)) skillArr.push(e.target.value);
        else {
            skillArr.splice(skillArr.indexOf(e.target.value), 1)
        }
        setSkills(skillArr);
        return;
    }

    return (
            <form onSubmit={handleSubmit} className='edit-form'>
                <h2>Edit Developer</h2>
                <ul className='errors'>{Object.entries(errors).map((error) => (
                    <li key={error[0]}>{error[1]}: {error[0]}</li>
                ))}</ul>
                <div className='edit-name'>
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='edit-icon'>
                    <select
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}>
                        {icons.map(ele =>
                            <option key={ele} value={ele}>{ele}</option>
                        )}
                    </select>
                    <i className={icon} />
                </div>
                <div className='edit-city'>
                    <input
                        type='text'
                        placeholder='City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='edit-state'>
                    <input
                        type='text'
                        placeholder='State'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>
                <div className='edit-skills'>
                    <select multiple={true} value={skills} onChange={(e) => {
                        gatherSkills(e)
                    }}>
                        {skillsList.map(skill => <option key={skill.id} value={skill.id}>{skill.name}</option>)}
                    </select>
                </div>
                <div className='edit-bio'>
                    <textarea
                        placeholder='About Me'
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <button className='submit' type='submit' disabled={errors.length > 0}>Submit</button>
                </div>
            </form>
    )
}

export default UpdateDeveloper
