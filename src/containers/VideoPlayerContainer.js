import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = (state) => {
//   // create mapStateToProps function
//   var mapStateToProps = (state) => {
//     return {
//       currentVideo: state.currentVideo
//     };
//   };

//   // invoke connect with mapStateToProps on VideoPlayer component
//   return connect(mapStateToProps)(VideoPlayer);
// };


var mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
