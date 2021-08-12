import React from 'react';
import Header from './component/Header'
import Nav from './component/Nav'
import AllBuyACarTruckFix from './component/AllBuyACarTruckFix';
import SectionTwo from './component/SectionTwo';
import SectionThree from './component/SectionThree';
import SectionFour from './component/SectionFour';
import SectionSellnVideo from './component/SectionSellnVideo';
import SectionForTextMap from './component/SectionForTextMap'
import DownloadStore from './component/DownloadStore'
import Footer from './component/Footer';




function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <AllBuyACarTruckFix/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionSellnVideo/>
    <SectionForTextMap/>
    <DownloadStore/>
    <Footer/>
    </div>
  );
}

export default App;
