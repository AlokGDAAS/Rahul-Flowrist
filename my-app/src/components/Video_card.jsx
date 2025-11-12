import React from "react";

const Video_card = ({ src, poster, width = "100%", height = "auto", controls = true, autoplay = false, loop = false, muted = false }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <video
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        className="rounded-xl shadow-lg"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video_card;
