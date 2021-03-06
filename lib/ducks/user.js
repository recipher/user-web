import _ from 'lodash';
import { RESOURCE } from '@recipher/resource';

export const SAVE = 'recipher/user/user/SAVE';
export const SUCCESS = 'recipher/user/user/SUCCESS';
export const FAILED = 'recipher/user/user/FAILED';

const ERRORS = {
  500: 'Error updating user'
};

const initialState = { 
  updating: false
, error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SAVE:
    return _.assign({}, state, { updating: true });
  case SUCCESS:
    return _.assign({}, state, { error: null, updating: false });
  case FAILED:
    return _.assign({}, state, { error: ERRORS[action.payload.status], updating: false });
  default:
    return state;
  }
};

export function save(user, data) {
  return {
    [RESOURCE]: {
      types: [ SAVE, SUCCESS, FAILED ]
    , payload: {
        url: `/users/${user.id}`
      , method: 'put'
      , data: { user: data }
      }
    }
  };
};
