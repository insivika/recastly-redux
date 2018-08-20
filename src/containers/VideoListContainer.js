import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


function mapStateToProps(state){
  return {
    videos: state.videoList
  }
}

// handleVideoListEntryTitleClick(video) {
//   this.setState({currentVideo: video});
// }

function mapDispatchToProps(dispatch){
  return {
    handleVideoListEntryTitleClick: function(video){
      dispatch(changeVideo(video))
    }
  }
}


var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
