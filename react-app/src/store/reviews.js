const GET_REVIEWS = 'reviews/getAll';
const ADD_REVIEW = 'reviews/addOne';
const EDIT_REVIEW = 'reviews/editOne';
const DELETE_REVIEW = 'reviews/deleteOne';

const getReviews = (allReviews) => {
  return {
    type: GET_REVIEWS,
    payload: allReviews,
  };
};

const addReview = (newReview) => {
  return {
    type: ADD_REVIEW,
    payload: newReview,
  }
}

const editReview = (editedReview) => {
  return {
    type: EDIT_REVIEW,
    payload: editedReview,
  }
}

const deleteReview = (id) => {
  return {
    type: DELETE_REVIEW,
    id
  };
};

export const getAll = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  const { reviews } = data
  dispatch(getReviews(reviews));
  return data;
};

export const createOne = (body, rating, developerId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${developerId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body, rating
    }),
  });
  const data = await response.json();
  console.log(data)
  dispatch(addReview(data));
  return data;
};

export const editOne = ({ }) => async (dispatch) => {
  const response = await fetch('/api/reviews/', {
    method: 'PUT',
    body: JSON.stringify({

    }),
  });
  dispatch(editReview(response));
  return response;
};

export const deleteOne = ({ id }) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`, {
    method: 'DELETE',
  })
  dispatch(deleteReview(id));
  return response;
}

const initialState = { init: null };

const reviewsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case GET_REVIEWS:
      if (action.payload.length > 0) {
        newState[action.payload[0].developerId] = action.payload
      }
      return newState;
    case ADD_REVIEW:
      if (newState[action.payload.developerId]) {
        newState[action.payload.developerId].push(action.payload)
      } else {
        newState[action.payload.developerId] = [action.payload]
      }
      return newState
      
      case DELETE_REVIEW:
        delete newState[action.id]
        return newState;
      // case EDIT_COMMENT:
      //   return state;
    default:
      return state;
  }
};

export default reviewsReducer;
