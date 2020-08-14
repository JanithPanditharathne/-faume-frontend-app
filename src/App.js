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
        // initFaceApiAndUserMedia('videoPlaceholder2');
    })
    return (
        <div className="App">
            <div className="container-wrapper">
                <div className="container">
                    <h3>Lets make sure it's you</h3>
                    <p>
                        Before you placing your order, you must verify payment to Online Store for $275.99
                    </p>
                    <p>
                        Please verify using face authentication
                    </p>

                    <button onClick={handleVideo}>AUTHENTICATE WITH FACE</button>
                    <p>
                        You are authorizing My Bank to get your facial data. Click <a href="#">here</a> to understand how we use your data.. View our privacy notice.
                    </p>

                    <strong>Having Trouble?</strong>
                    <small><a href="#">Choose another security option</a></small>
                    {/*<button onClick={handleVideo2}>Start Video - myCanvasWrapper 2</button>*/}
                    {/*<div id="videoPlaceholder2"></div>*/}
                    <div id="videoPlaceholder"></div>
                    <button onClick={stop}>stop</button>
                    {version}
                </div>
            </div>
        </div>
    );
}

export default App;
