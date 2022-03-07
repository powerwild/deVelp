const ADD_DEV = 'developers/ADD_DEV';
const EDIT_DEV = 'developers/EDIT_DEV';
const REMOVE_DEV = 'developers/REMOVE_DEV';
const LOAD_DEVS = 'developers/LOAD_DEVS'

const loadAllDevs = (devs) => ({
    type: LOAD_DEVS,
    devs
})

const addDev = (dev) => ({
    type: ADD_DEV,
    dev
})

const editDev = (dev) => ({
    type: EDIT_DEV,
    dev
})

const remDev = (dev) => ({
    type: REMOVE_DEV,
    dev
})

//add dev
export const addNewDev = (dev) => async dispatch => {
    const response = await fetch(`/api/developers/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dev)
    })
    if (response.ok) {
        const newDev = await response.json();
        dispatch(addDev(newDev))
        return newDev
    }
}

// get all
export const allDevs = () => async dispatch => {
    const response = await fetch(`/api/developers/`);
    if (response.ok) {
        const devList = await response.json();
        dispatch(loadAllDevs(devList['developers']));
        return devList['developers']
    }
    return response;
};


//DEVS REDUCER

const initialState = { developers: null }

const devReducer = (state = initialState, action) => {


    switch (action.type) {

        case LOAD_DEVS:
            let newState = { ...state }
            const devList = {}
            // console.log("ACTION.PAYLOAD", action.devs)
            action.devs.forEach(dev => {
                devList[dev.id] = dev;
            })
            newState.developer = devList
            return {
                newState
            }
        case ADD_DEV: {
            let newState = { ...state }
            newState.developer = { ...newState.developer, [action.dev.id]: action.dev }
            return newState
        }

        default:
            return state;

    }

}

export default devReducer;