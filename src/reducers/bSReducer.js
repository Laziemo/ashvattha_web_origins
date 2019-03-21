import { UPDATE_BS } from '../actions/types';

const initialState = {
  bSelection: ""
};

export default function (state = initialState, action){ //receives action from dispatcher

  switch(action.type){

    case UPDATE_BS:
      return {
        ...state,
        bSelection: action.payload
      }

    default:
      return state;
  }
};
