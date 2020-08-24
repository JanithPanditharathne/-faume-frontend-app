import React, {useEffect, useState} from 'react';
import {initVideo, version, initFaceApiAndUserMedia, clear} from 'face-auth-rnd';
import './App.css';
import 'face-auth-rnd/dist/face-auth-rnd.css'

function App() {

    const [valid, setValid] = useState(false);
    let verificationId = "";

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        verificationId = params.get("verificationId");
        console.log(verificationId);
        initFaceApiAndUserMedia('videoPlaceholder', verificationId, onValidationComplete);
    },[]);

    const handleVideo = () => {
        initVideo("videoPlaceholder", verificationId);
    };

    const onValidationComplete = (valid) => {
        setValid(valid);
    }

    const stop = () =>{
        clear('videoPlaceholder');
    };

    return (
        <div className="faume-fe-wrapper">
            <div className="faume-fe-header">
                <div className="faume-fe-logo"></div>
                <div className="faume-fe-visa-logo"></div>
            </div>
            <div className="faume-fe-content-wrapper">
                <div className="faume-fe-container">
                    <div className="faume-fe-text-heading">Lets make sure it's you</div>
                    <p className="faume-fe-text-content">
                        Before placing your order,  you must verify payment to Online Store for $275.99
                    </p>
                    <ul>
                        <li>Please verify using face authentication</li>
                    </ul>

                    <button className="faume-fe-btn videoPlaceholder-btn" onClick={handleVideo}  disabled={!valid}><span>AUTHENTICATE WITH FACE</span></button>
                    <p className="faume-fe-text-content">
                        You are authorizing My Bank to get your facial data. Click <a href="#">here</a> to understand how we use your data.. View our privacy notice.
                    </p>

                    <div className="faume-fe-support">Having Trouble?</div>
                    <a href="#" className="faume-fe-security-option">Choose another security option</a>
                    {/*<button onClick={handleVideo2}>Start Video - myCanvasWrapper 2</button>*/}
                    {/*<div id="videoPlaceholder2"></div>*/}
                    <div id="videoPlaceholder"></div>
                    <button className="faume-fe-btn stop" onClick={stop}>stop</button>
                </div>
            </div>
            <div className="faume-fe-content-footer">
                <div className="faume-fe-footer-content-link">Need Help?</div>
                <div className="faume-fe-footer-content-link-plus">+</div>
            </div>
            <small className="faume-fe-version">{version}</small>
        </div>
    );
}

export default App;
