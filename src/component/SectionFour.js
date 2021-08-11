import React from "react";
import '../styles/SectionFour.css'





const SectionFour =()=>{
    return(
        <div>
            <h2 className="featured_car"> Featured Cars</h2> 
        <div className="big_container">
            <div className="first_car_featured">   
                <div className="Card_new">
                    <img src="Image/toyota_cruiser.jpeg" alt="toyotalandcruiser" width="220px" height="200px" />
                    <div className="year_name">
                        <span className="year">2019</span>
                        <span className="name_of_car"> Toyota LandCruiser</span>
                    </div>
                    <div className="container_new">
                        <div className="price_and_rating"><span className="price">₦37,010,000</span><span style={{paddingLeft:"90px", fontSize:"12px"}}>⭐ 5.2</span></div>
                        <div className ="car_details">
                            <span><img src="Image/dashboard.svg" alt="dashboard" width="26px" height="16px" /> 46km</span> 
                            <span><img src="Image/location.svg" alt="location" width="25px" height="16px" /> Victoria Island, Lagos</span> 
                            <span><img src="Image/sports-car.svg" alt="car" width="25px" height="16px" /> New</span> 
                       </div>
                       
                        
                    </div>
                </div>
                
        </div>
        <div className="first_car_featured">   
                <div className="Card_new">
                <img src="Image/benz_full_picture.jpeg" alt="benz" width="220px" height="200px" />
                <div className="year_name">
                        <span className="year">2015</span>
                        <span className="name_of_car"> Mercedes-Benz C 300</span>
                    </div>
                <div className="container_new">
                <div className="price_and_rating"><span className="price">₦11,515,000</span><span style={{paddingLeft:"90px", fontSize:"12px"}}>⭐ 4.6</span></div>
                        <div className ="car_details">
                            <span><img src="Image/dashboard.svg" alt="dashboard" width="26px" height="16px" /> 46km</span> 
                            <span><img src="Image/location.svg" alt="location" width="25px" height="16px" /> Anthony, Lagos</span> 
                            <span><img src="Image/sports-car.svg" alt="car" width="25px" height="16px" /> Foreign Used</span>
                           
                        </div> 
                        <div className="amount_and_car_loan"><span className="amount">From 508,312.00 </span>
                        <button className="button_">Apply for Loan</button>
                        </div>
                        
                              
                </div>
                </div>
                
        </div>
        <div className="first_car_featured">   
                <div className="Card_new">
                <img src="Image/benz_gle.jpeg" alt="benz_gle" width="220px" height="200px" />
                <div className="year_name">
                        <span className="year">2020</span>
                        <span className="name_of_car"> Mercedes-Benz GLE 350</span>
                    </div>
                <div className="container_new">
                <div className="price_and_rating"><span className="price">₦50,515,000</span><span style={{paddingLeft:"90px", fontSize:"12px"}}>⭐ 5.0</span></div>
                        <div className ="car_details">
                            <span><img src="Image/dashboard.svg" alt="dashboard" width="26px" height="16px" /> <span>680km</span></span> 
                            <span><img src="Image/location.svg" alt="location" width="25px" height="16px" /> Jakande, Lekki, Lagos</span> 
                            <span><img src="Image/sports-car.svg" alt="car" width="25px" height="16px" /> Foreign Used</span>
                           
                        </div> 
                        <div className="amount_and_car_loan"><span className="amount">From 508,312.00 </span>
                        <button className="button_">Apply for Loan</button>
                        </div>

                </div>
                </div>
                
        </div>
        <div className="first_car_featured">
                <div className="Card_new">
                <img src="Image/ben_gwagon.jpeg" alt="benz_gwagon" width="220px" height="200px" />
                <div className="year_name">
                        <span className="year">2015</span>
                        <span className="name_of_car"> Mercedes-Benz C 300</span>
                    </div>
                <div className="container_new">
                <div className="price_and_rating"><span className="price">₦11,515,000</span><span style={{paddingLeft:"90px", fontSize:"12px"}}>⭐ 5.2</span></div>
                        <div className ="car_details">
                            <span><img src="Image/dashboard.svg" alt="dashboard" width="26px" height="16px" /> 46km</span> 
                            <span><img src="Image/location.svg" alt="location" width="25px" height="16px" /> Anthony, Lagos</span> 
                            <span><img src="Image/sports-car.svg" alt="car" width="25px" height="16px" /> Foreign Used</span>
                           
                        </div> 
                        <div className="amount_and_car_loan"><span className="amount">From 508,312.00 </span>
                        <button className="button_">Apply for Loan</button>
                        </div>
                </div>
                </div>
                
        </div>
        </div>
        
        </div>
    )

};

export default SectionFour;