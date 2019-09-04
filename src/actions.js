export const EDIT_RISK = 'EDIT_RISK';

export const editRisk = payload => {
  return {
    type: EDIT_RISK,
    payload
  };
};

export const ADD_DAYINSIDE = 'ADD_DAYINSIDE';

export const addDayInside = payload => {
  return {
    type: ADD_DAYINSIDE,
    payload
  };
};

export const ADD_DAYONVAULT = 'ADD_DAYONVAULT';

export const addDayOnVault = () => {
  return {
    type: ADD_DAYONVAULT,
    payload: 1
  };
};

export const EDIT_PEOPLE = 'EDIT_PEOPLE';

export const editPeople = payload => {
  return {
    type: EDIT_PEOPLE,
    payload
  };
};

export const ADD_MONEY = 'ADD_MONEY';

export const addMoney = payload => {
  return {
    type: ADD_MONEY,
    payload
  };
};

export const DELETE_MONEY = 'DELETE_MONEY';

export const deleteMoney = payload => {
  return {
    type: DELETE_MONEY,
    payload
  };
};

export const SET_DAYSINSIDE = 'SET_DAYSINSIDE';

export const setDaysInside = payload => {
  return {
    type: SET_DAYSINSIDE,
    payload
  };
};

export const SET_PEOPLE = 'SET_PEOPLE';

export const setPeople = payload => {
  return {
    type: SET_PEOPLE,
    payload
  };
};

export const SET_RISK = 'SET_RISK';

export const setRisk = payload => {
  return {
    type: SET_RISK,
    payload
  };
};

export const SET_DAYONVAULT = 'SET_DAYONVAULT';

export const setDayOnVault = payload => {
  return {
    type: SET_DAYONVAULT,
    payload
  };
};

export const SET_RESULT = 'SET_RESULT';

export const setResult = payload => {
  return {
    type: SET_RESULT,
    payload
  };
};