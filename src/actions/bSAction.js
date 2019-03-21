
import { UPDATE_BS } from './types';


const updateBSelection = id => dispatch => {
  console.log('Got ID', id);
  console.log('Now to pass it forward!!!');
    dispatch({
      type: UPDATE_BS,
      payload: id
    }); //dispatched to the reducer
}

module.exports = {updateBSelection};
