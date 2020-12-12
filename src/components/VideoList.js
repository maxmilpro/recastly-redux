import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <Router>
    <div className="video-list">
      {
        videos.map(video => (
          <VideoListEntry
            key={video.etag}
            video={video}
            handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
          />
        ))
      }
    </div>
  </Router>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
