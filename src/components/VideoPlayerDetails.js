import React from 'react';

var VideoPlayerDetails = ({video}) => (
  <div className="video-player-details">
    <h3>{video.snippet.title}</h3>
    <div>Channel: {video.snippet.channelTitle}</div>
    <div>{video.snippet.description}</div>
    <div>Published {video.snippet.publishedAt}</div>
  </div>
);

export default VideoPlayerDetails;