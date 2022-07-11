import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="item flex hover:bg-slate-400 cursor-pointer items-center mb-4"
    >
      <img
        alt={video.snippet.title}
        className="inline-block align-top max-w-[180px]"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="inline-block w-auto pl-2 align-top ">
        <div className="block font-bold">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
