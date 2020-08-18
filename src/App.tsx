import React, { useState } from 'react';
import Video from './Video'

function App() {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const handleStart = () => {
    navigator.mediaDevices.getUserMedia({video:true, audio:true}).then(stream => {
      setStream(stream)
    }).catch(() => console.log)
  }
  const handleStop = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
    setStream(null)
  }
  return (
    <div>
      <p>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
      </p>
      <p>
        <Video srcObject={stream} width={320} height={240}/>
      </p>
    </div>
  );
}

export default App;
