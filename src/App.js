import React, {useEffect} from 'react';
import {initVideo, version, initFaceApiAndUserMedia, clear} from 'face-auth-rnd';
import './App.css';
import 'face-auth-rnd/dist/face-auth-rnd.css'

function App(props) {

    let verificationId = "";

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        verificationId = params.get("verificationId");
        console.log(verificationId);
    });

    const handleVideo = () => {
        initVideo("videoPlaceholder", verificationId);
    };
    // const handleVideo2 = () => {
    //   initVideo("videoPlaceholder2");
    // }
    const stop = () =>{
        clear('videoPlaceholder');
    }

    useEffect(() => {
        initFaceApiAndUserMedia('videoPlaceholder', verificationId);
        // initFaceApiAndUserMedia('videoPlaceholder2');
    })
    return (
        <div className="App">
            <div className="header">
                <div className="logo logo1"></div>
                <div className="logo logo2"></div>
            </div>
            <div className="container-wrapper">
                <div className="container">
                    <div className="title">Lets make sure it's you</div>
                    <p>
                        Before you placing your order, you must verify payment to Online Store for $275.99
                    </p>
                    <p>
                        Please verify using face authentication
                    </p>

                    <button className="btn fa-btn videoPlaceholder-btn" onClick={handleVideo}>AUTHENTICATE WITH FACE</button>
                    <p>
                        You are authorizing My Bank to get your facial data. Click <a href="#">here</a> to understand how we use your data.. View our privacy notice.
                    </p>

                    <div className="support">Having Trouble?</div>
                    <div className="security-option"><a href="#">Choose another security option</a></div>
                    {/*<button onClick={handleVideo2}>Start Video - myCanvasWrapper 2</button>*/}
                    {/*<div id="videoPlaceholder2"></div>*/}
                    <div id="videoPlaceholder"></div>
                    <button className="btn stop" onClick={stop}>stop</button>
                    <small>{version}</small>
                </div>
            </div>
        </div>
    );
}

export default App;
