import React from 'react';
import BuyACarSection from './BuyACarSection';
import BuyATruck from './BuyATruck';
import FixACar from './FixACar';
import "../styles/AllBuyACarTruckFix.css"

const AllBuyACarTruckFix = (props) =>{
    return( 
            <div className="boxContainer">
                    <div className="firstBox"><BuyACarSection/></div>
                    <div className="secondBox">
                        <div><BuyATruck/></div>
                        <div className="secondBigBoxTwo"><FixACar/></div>
                    </div>
                
                
            </div>
      

    );


}


export default AllBuyACarTruckFix