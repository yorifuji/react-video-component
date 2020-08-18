import React, { useState } from 'react';
import Video from './Video'

function App() {
  const [streams, setStreams] = useState<MediaStream[]>([])
  const handleStart = () => {
    navigator.mediaDevices.getUserMedia({video:true, audio:true}).then(stream => {
      setStreams([...streams, stream])
    }).catch(() => console.log)
  }
  const handleStop = () => {
    streams.forEach(stream => {
      stream.getTracks().forEach(track => track.stop())
    })
    setStreams([])
  }
  return (
    <div>
      <p>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
      </p>
      <p>
        {
          streams.map((stream, index) => <Video key={index} srcObject={stream} width={320} height={240}/>)
        }
      </p>
    </div>
  );
}

export default App;
