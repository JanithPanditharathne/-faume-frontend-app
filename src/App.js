import React, {useEffect} from 'react';
import {initVideo, version, initFaceApiAndUserMedia, clear} from 'face-auth-rnd';
import './App.css';

function App() {

    const handleVideo = () => {
        initVideo("videoPlaceholder");
    }
    // const handleVideo2 = () => {
    //   initVideo("videoPlaceholder2");
    // }
    const stop = () =>{
        clear('videoPlaceholder');
    }

    useEffect(() => {
        initFaceApiAndUserMedia('videoPlaceholder');
    })
    return (
        <div className="App">
            <div className="container-wrapper">
                <div className="container">
                        {version}

                        {/*{initFaceApiAndUserMedia('videoPlaceholder2')}*/}

                    <button onClick={handleVideo}>Start Video - myCanvasWrapper</button>
                    <button onClick={stop}>stop</button>
                        {/*<button onClick={handleVideo2}>Start Video - myCanvasWrapper 2</button>*/}

                        <div id="videoPlaceholder"></div>
                        {/*<div id="videoPlaceholder2"></div>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
