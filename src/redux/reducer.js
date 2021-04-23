import {
  GET_COMPANIES,
  GET_HOUSES,
  FETCH_PEOPLE
} from "./types";

const initialState = {
  data: [],
  houses: [],
  companies: []
};

const apiDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: [...action.event]
      };
    case GET_HOUSES:
      return {
        ...state,
        houses: [...action.event]
      };
    case FETCH_PEOPLE: {
      return {
        ...state,
        data: [...action.event]
      };
    }
    default:
      return state;
  }
};

export default apiDataReducer;