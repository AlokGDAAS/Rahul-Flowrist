import React, { useEffect, useRef } from "react";

const Video_card = ({
  src,
  poster,
  width = "100%",
  height = "auto",
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play when visible
            video.play().catch(() => {});
          } else {
            // Pause when not visible
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // play/pause based on 50% visibility
    );

    if (video) observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center my-4">
      <video
        ref={videoRef}
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
