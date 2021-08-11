import React, { useState } from "react";
import SectionThreeCSS from '../styles/SectionThree.module.css'
import { Button } from "react-bootstrap";

const SectionThree = () => {
    const [carmake, setCarMake] = useState("")

    const selectCarMake  = (e) => {
        console.log(e.target.value)
        setCarMake(e.target.value)
    }

    return(

        <div className={SectionThreeCSS.container_spacebetween}>
            <div className={SectionThreeCSS.search_text_container}>
                    <div className ={SectionThreeCSS.title}>Search cars, find what is right for you and lock it down with a deposit</div>
                    <div className={SectionThreeCSS.description}>
                        Use our extensive database to research and compare trims, photos, and reviews for every make and model, 
                        so you can find the car that fits your life.
                    </div>
                
                <div className={SectionThreeCSS.search_button}>
                    <select value={carmake} onChange={(e) => selectCarMake(e)} style={{marginRight:"10px", padding:"05px", width:"200px"}}>
                        <option disabled>Select Make</option>
                        <option value="bmw">BMW</option>
                        <option value="honda">Honda</option>
                        <option value="toyota">Toyota</option>
                        <option value="acura">Acura</option>
                        <option value="bently">Bently</option>
                    </select>
                    <select style={{marginRight:"10px", padding:"05px", width:"200px"}}>
                        <option>Select Model</option>
                    </select>
                    <a href="li"><Button variant="warning" style={{padding: "5px"}}> Search Cars</Button></a>
                </div>
                    <div>
                    
                   </div>
            
                </div>
            <div className={SectionThreeCSS.all_cars}>
                <div>
                   <a href="link"> <img src="Image/audi.jpg" alt="audi" className= {SectionThreeCSS.audi_logo} /></a>
                   <a href="link"><img src="Image/bmw.svg" alt="bmw" className= {SectionThreeCSS.bmw_logo} /></a> 
                   <a href="link"><img src="Image/honda_logo.svg"  alt="honda" className= {SectionThreeCSS.honda_logo} /></a>
                   <a href="link"><img src="Image/hyundai.svg" alt="hyundai"  className= {SectionThreeCSS.hyundai_logo}/></a>
                </div>
                <div>
                   <a href="link"> <img src="Image/jaguar.jpeg" alt="jaguar" className= {SectionThreeCSS.jaguar_logo}/></a>
                   <a href="link"><img src="Image/kia.svg" alt="kia" className= {SectionThreeCSS.kia_logo}/></a> 
                   <a href="link"><img src="Image/land_rover.png" alt="landrover" className= {SectionThreeCSS.landrover_logo}/></a>
                   <a href="link"><img src="Image/lexus.svg" alt="lexus" className= {SectionThreeCSS.lexus_logo}/></a>
                </div>
                <div>
                   <a href="link"> <img src="Image/mercedez_benz.svg" alt="benz" className= {SectionThreeCSS.benz_logo}/></a>
                   <a href="link"><img src="Image/nissan.svg" alt="nissian" className= {SectionThreeCSS.nissian_logo}/></a> 
                   <a href="link"><img src="Image/toyota.jpg" alt="toyota" className= {SectionThreeCSS.toyota_logo}/></a>
                   <a href="link"><img src="Image/volks.svg" alt="volks" className= {SectionThreeCSS.volks_logo}/></a>
                </div>
            </div>
            </div>
        
    )
}

export default SectionThree