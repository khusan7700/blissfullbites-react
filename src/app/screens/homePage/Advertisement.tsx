import React from "react";

export default function Advertisement() {
  return (
    <div className="abs-restaurant-frame">
      <video
        className={"ads-video"}
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
      >
        <source type="video/mp4" src="video/video.mp4" />
      </video>
    </div>
  );
}
