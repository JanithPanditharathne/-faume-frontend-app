import React, {useEffect} from 'react';
import { initVideo, version, initFaceApiAndUserMedia } from 'face-auth-rnd';
import './App.css';

function App() {

  const handleVideo = () => {
    initVideo("videoPlaceholder");
  }
  // const handleVideo2 = () => {
  //   initVideo("videoPlaceholder2");
  // }

  useEffect(()=>{
      initFaceApiAndUserMedia('videoPlaceholder');
  })
  return (
    <div className="App">
      {version}

      {/*{initFaceApiAndUserMedia('videoPlaceholder2')}*/}

      <button onClick={handleVideo}>Start Video - myCanvasWrapper</button>
      {/*<button onClick={handleVideo2}>Start Video - myCanvasWrapper 2</button>*/}

      <div id="videoPlaceholder"></div>
      <hr/>
      {/*<div id="videoPlaceholder2"></div>*/}
    </div>
  );
}

export default App;
