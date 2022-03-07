const GET_REVIEWS = 'reviews/getAll';
// const ADD_REVIEW = 'reviews/addOne';
// const EDIT_REVIEW = 'reviews/editOne';
// const DELETE_REVIEW = 'reviews/deleteOne';

const getReviews = (allReviews) => {
  return {
    type: GET_REVIEWS,
    payload: allReviews,
  };
};

// const addReview = (newReview) => {
//   return {
//     type: ADD_REVIEW,
//     payload: newReview,
//   }
// }

// const editReview = (editedReview) => {
//   return {
//     type: EDIT_REVIEW,
//     payload: editedReview,
//   }
// }

// const deleteReview = (deletedReview) => {
//   return {
//     type: DELETE_REVIEW,
//     payload: deletedReview,
//   };
// };

export const getAll = () => async (dispatch) => {
  const response = await fetch("/api/reviews", {
    method: "GET",
  });
  const data = await response.json();
  const { reviews } = data;
  dispatch(getReviews(reviews));
  return response;
};

// export const createOne = ({  }) => async (dispatch) => {
//   const response = await fetch('/api/reviews', {
//     method: 'POST',
//     body: JSON.stringify({

//     }),
//   });
//   dispatch(addComment(response));
//   return response;
// };

// export const editOne = ({ }) => async (dispatch) => {
//   const response = await fetch('/api/reviews', {
//     method: 'PUT',
//     body: JSON.stringify({

//     }),
//   });
//   dispatch(editComment(response));
//   return response;
// };

// export const deleteOne = ({  }) => async (dispatch) => {
//   const response = await fetch(`/api/reviews/${}`, {
//     method: 'DELETE',
//   })
//   dispatch(deleteComment(response));
//   return response;
// }

const initialState = { allReviews: null };

const reviewsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case GET_REVIEWS:
      newState.allReviews = action.payload;
      return newState;
      // case ADD_COMMENT:
      //   return state;
      // case DELETE_COMMENT:
      //   return state;
      // case EDIT_COMMENT:
      //   return state;
    default:
      return state;
  }
};

export default reviewsReducer;
