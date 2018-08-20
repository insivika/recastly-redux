import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


function mapStateToProps(state){
  return {
    video: state.currentVideo
  }
}


var VideoPlayerContainer = connect(
  mapStateToProps,

)(VideoPlayer);

export default VideoPlayerContainer;
