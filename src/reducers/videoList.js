import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData'

const sampleData = exampleVideoData;

var videoListReducer = (state = sampleData, action) => {
  switch(action.type){
    case 'CHANGE_VIDEO_LIST':
      return action.videos

    default:
      return [];
  }
};

export default videoListReducer;
