import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

var VideoListEntry = ({video, handleVideoListEntryTitleClick}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <Link to={`/video/${video.etag}`}>
        <div
          className="video-list-entry-title"
          onClick={() => handleVideoListEntryTitleClick(video)}
        >
          {video.snippet.title}
        </div>
      </Link>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoListEntry;
