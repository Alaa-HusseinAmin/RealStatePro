import React, { Fragment, useState } from 'react';
import Collapsible from 'react-collapsible';
import '../CSS/Accordion.css';
import Question from '../Details/Accordion';
import pic from '../Images/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
const Accordio = () => {
  const [detail,setDetail] = useState(Question)
  return (
    <Fragment>
        <section className='accordion'>
            <div className="accordion-row">
              <div className="left">
                <h3>Frequently Ask</h3>
                {
                  detail.map((detail)=>{
                    return((
                      <div className='left-content'>
                        <Collapsible
                        className="Collapsible"
                        trigger={[<i className="fa-solid fa-angle-down"></i>,detail.question]}
                        triggerWhenOpen={[<i className='fa-solid fa-angular-up'>,detail.question</i>]}
                        >
                          <p className="content-show">
                            {detail.answer}
                          </p>
                        </Collapsible>
                      </div>
                    ))
                  })
                }
              </div>
              <div className="right">
                <img src={pic} alt="person" />
              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Accordio