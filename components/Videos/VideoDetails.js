import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="relative">
      <div className="relative h-0 max-w-[100%] w-full overflow-hidden pb-[55%] ">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          title="Video Player"
          allowFullScreen="allowfullscreen"
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="text-base relative shadow-lg my-4 p-4">
        <h4 className="text-lg font-bold mb-4">{video.snippet.title}</h4>
        <p className="mb-2">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
