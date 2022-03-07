const GET_SKILLS = 'skills/getAll';

const getSkills = (skills) => {
    return {
        type: GET_SKILLS,
        skills
    }
}


export const getSkillsThunk = () => async dispatch => {
    const response = await fetch('/api/skills/', {method: 'GET'});
    const resData = await response.json()
    dispatch(getSkills(resData['skills']))
}


const initialState = {skills: null}

const skillsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case GET_SKILLS:
            newState.skills = action.skills
            return newState
        default:
            return state;
    }
}

export default skillsReducer;
