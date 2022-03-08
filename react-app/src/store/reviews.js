const GET_REVIEWS = 'reviews/getAll';
const ADD_REVIEW = 'reviews/addOne';
const EDIT_REVIEW = 'reviews/editOne';
// const DELETE_REVIEW = 'reviews/deleteOne';

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

// const deleteReview = (deletedReview) => {
//   return {
//     type: DELETE_REVIEW,
//     payload: deletedReview,
//   };
// };

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
  dispatch(addReview(data));
  return data;
};

export const editOne = (body, rating, reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body, rating
    }),
  });
  const data = await response.json();
  dispatch(editReview(data));
  return data;
};

// export const deleteOne = ({  }) => async (dispatch) => {
//   const response = await fetch(`/api/reviews/${}`, {
//     method: 'DELETE',
//   })
//   dispatch(deleteComment(response));
//   return response;
// }

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
    case EDIT_REVIEW:
      let newArr = newState[action.payload.developerId];
      let index = 0;
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id === action.payload.id ) {
          index = i
        }
      }
      newState[action.payload.developerId].splice(index, 1, action.payload);
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
