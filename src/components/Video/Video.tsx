'use client';

import styles from './Video.module.css';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <section
      id="video"
      className={styles.video}
      style={{
        backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH}/video/video_background.jpg")`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/video/video.mp4`}
        className={styles.video__player}
        playsInline
      />
      {hovered && (
        <button onClick={togglePlay} className={styles.play__button}>
          {isPlaying ? <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/pause.svg`} alt="pause" width={64} height={64} /> :
           <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/play.svg`} alt="play" width={64} height={64} />}
        </button>
      )}
    </section>
  );
};

export default Video;
