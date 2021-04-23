import {GET_COMPANIES, GET_HOUSES, FETCH_PEOPLE} from './types';
import axios from 'axios';

export const getHousesHelper = event => {
  return {
    type: GET_HOUSES,
    event: event
  };
};

export const getCompaniesHelper = event => {
  return {
    type: GET_COMPANIES,
    event: event
  };
};

export const getPeopleHelper = event => {
  return {
    type: FETCH_PEOPLE,
    event: event
  };
};

export const fetchPeople = () => {
  return dispatch => {
    axios
      .get("https://picsum.photos/v2/list")
      .then(response => {
        dispatch(getPeopleHelper(response.data));
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
};

export const fetchCompanies = () => {
  return dispatch => {
    axios
      .get("https://picsum.photos/v2/list")
      .then(response => {
        dispatch(getCompaniesHelper(response.data));
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
};

export const fetchHouses = () => {
  return dispatch => {
    axios
      .get("https://picsum.photos/v2/list")
      .then(response => {
        dispatch(getHousesHelper(response.data));
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
};