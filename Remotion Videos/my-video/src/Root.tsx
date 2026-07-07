import React from 'react';
import { Composition } from 'remotion'; 
import { SpotifyPlayer } from './SpotifyPlayer';

const Root: React.FC = () => {
  return (
    <Composition
      id="SpotifyPlayer"
      component={SpotifyPlayer}
      durationInFrames={3270} // 1:49 song duration at 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

export default Root; // <-- Export default at the bottom