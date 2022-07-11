import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    return (
      <div className="flex-row max-h-screen text-base overflow-auto">
        {this.props.videos.map((vid) => {
          return (
            <VideoItem
              key={vid.id.videoId}
              onVideoSelect={this.props.onVideoSelect}
              video={vid}
            />
          );
        })}
      </div>
    );
  }
}
export default VideoList;
