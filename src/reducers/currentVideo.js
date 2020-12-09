import Redux from 'redux';
// import store

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // if state is undefined
  // if (state === undefined) {
  //   // return the current state
  //   return null;
  // }
  // if (action === undefined) {
  //   throw Error('Action cannot be undefined');
  // }
  // if (action.type === 'CHANGE_VIDEO') {
  //   return action.video;
  // } else if (state === undefined) {
  //   return null;
  // } else {
  //   return state.currentVideo;
  // }
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
