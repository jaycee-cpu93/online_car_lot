import React from 'react';
import "../styles/DownloadStore.css"


const DownloadStore =()=>{
    return(
        <div className="get-the-app ">
            <div className="bg-pattern">
                <img src="Image/pattern.svg" alt="pattern" />
                <div className="inner_container">
                    <div className="content__">
                            <div className="title__">Get the Autochek app</div>
                            <div className="description__">Enjoy 360 degree automotive solutions at your fingertips and get the best out of your car</div>
                            <div className="app-button"><a href="link"><img src="Image/google-play.png" alt="googleplay" width="50px" height="43px"/></a></div>
                    </div>
                    <div className="images">
                        <div className="iphone-x"><img src="Image/iphone-x.jpg" alt="iphone" /></div>
                        <div className="pixel-4"><img src="Image/pixel-4.png" alt="pixel4" /></div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default DownloadStore;