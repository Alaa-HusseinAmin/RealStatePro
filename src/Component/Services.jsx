import Aos from 'aos'
import "aos/dist/aos.css"
import React, { Fragment, useEffect, useState } from 'react'
import "../CSS/Services.css"
import ServicesDetail from "../Details/ServicesDetail"

const Services = () => {
    const [detail, setDetail] = useState(ServicesDetail)

    useEffect(()=>{

      Aos.init({ duration:2000, once:true, easing:"ease" })

    },[])

  return (

    <Fragment>

    <section data-aos= "fade-up" className="services">

    <div className="heading">
      <span>Our Services</span>
      <h2> The smartest way to buy a home </h2>
    </div>

    <div className="services-row">

    {
      detail.map((detail)=>{
        return(
          <div className="services-card">
          <div className="services-column">
            <div className="content">
                <div className="services-icon">
                    <img src={detail.Image} alt="icon" />
                </div>
                <div className="services-content">
                    <h3>{detail.heading}</h3>
                    <p>{detail.info}</p>
                </div>
            </div>
        </div>
          </div>
        )
      })
    }

    </div>

    </section>
    
    </Fragment>
  )
}

export default Services