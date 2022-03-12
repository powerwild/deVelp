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
    let addDeveloper = await dispatch(addNewDev(name, icon, bio, city, state, skills));
    if (addDeveloper?.errors) return setErrors(addDeveloper.errors)
    if (addDeveloper) {
      history.push(`/developers/${addDeveloper.id}`);
    }
  }


  const gatherSkills = (e) => {
    e.preventDefault();
    let skillArr = [...skills];
    if (!skillArr.includes(e.target.value)) skillArr.push(e.target.value);
    else {
      skillArr.splice(skillArr.indexOf(e.target.value), 1);
    }
    setSkills(skillArr);
    return
  }

  return (

    <form onSubmit={handleSubmit} className='new-dev-form'>
      <h2 className='New-dev-header'>New Developer</h2>
      <ul className='errors'>{Object.entries(errors).map((error) => (
        <li key={error[0]}>{error[1]}: {error[0]}</li>
      ))}</ul>
      <div>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <span className='edit-person-select-icon'>
        <select
          value={icon}
          onChange={(e) => setIcon(e.target.value)}>
          {icons.map(ele =>
            <option key={ele} value={ele[1]}>{ele[0]}</option>
          )}
        </select>
        <i className={icon} />
      </span>
      <div>
        <input
          type='text'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='State'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        <select multiple={true} value={skills} onChange={(e) => {
          gatherSkills(e)
        }}>
          {skillsList.map(skill => <option key={skill.id} value={skill.id}>{skill.name}</option>)}
        </select>
      </div>
      <div>
        <textarea
          placeholder='About Me'
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type='submit' disabled={errors.length > 0}>Submit</button>
      </div>
    </form>

  )

}

export default NewDeveloperForm;
