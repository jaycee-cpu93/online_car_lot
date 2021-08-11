import React from "react"
import "../styles/SectionSellnVideo.css"


const SectionSellnVideo = () =>{
        return(
           
            <div className="content_n_video container">
                <div className="content">
                    <div className="sell_your_car">
                        Selling your car at the right value has never been this easy
                    </div>
                     <div className="title_details">Check the estimated price of your car online and get your car inspected at our location or the comfort of your home and sell your car.</div>
                </div>
                <div className="sell_your_car_video">
                    <video autoplay="true" loop muted height="70%" width="70%"> 
                    <source src="Video/homepage-animation-new.mp4"></source></video>
                </div>
            </div>
           
        )
}

export default SectionSellnVideo