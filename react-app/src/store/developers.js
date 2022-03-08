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

const initialState = { developer: {}}

const devReducer = (state = initialState, action) => {


    switch (action.type) {

        case LOAD_DEVS:
            let newState = {...state}
            const devList = {}
            action.devs.forEach(dev => {
                devList[dev.id] = dev;
            })
            newState = devList

            return newState


        default:
            return state;

    }

}

export default devReducer;
