export const EDIT_RISK = 'EDIT_RISK';

export const editRisk = payload => {
  return {
    type: EDIT_RISK,
    payload
  };
};

export const ADD_DAYINSIDE = 'ADD_DAYSINSIDE';

export const addDayInside = () => {
  return {
    type: ADD_DAYINSIDE,
    payload: 1
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
