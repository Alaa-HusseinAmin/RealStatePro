import Aos from 'aos'
import "aos/dist/aos.css"
import React, { Fragment, useEffect, useState } from 'react'
import "../CSS/Work.css"
import WorkDetail from "../Details/WorkDetail"

const Work = () => {

    const [detail, setDetail] = useState(WorkDetail)

    useEffect(()=>{

        Aos.init({ duration:2500, once:true, easing:"ease" })
  
      },[])

  return (
    <Fragment>

    <section className="work">

    <div className="overlay"></div>

    <div data-aos = "fade-up" className="work-container">

        <div className="work-heading">
        <span>work flow</span>
        <h2> How It Work </h2>
        </div>

        <div className="column1">
            <div className="work-row">

            {
                detail.map((detail)=>{
                    return(
                <div className="work-card">
                    <div className="work-column">
                        <div className="content">
                            <div className="number">
                                <span>{detail.number}</span>
                            </div>
                            <div className="work-content">
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
        </div>

    </div>
        
    </section>
        
    </Fragment>
  )
}

export default Work