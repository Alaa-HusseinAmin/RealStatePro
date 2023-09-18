import React, { Fragment, useState } from 'react';
import '../CSS/Agents.css';
import '../Details/AgentsDetail';
import AgentsDetail from '../Details/AgentsDetail';
const Agents = () => {
    const [details,setDetails]=useState(AgentsDetail)
  return (
    <Fragment>
        <section className='agents'>
            <div className='agent-heading'>
                {/* <span>Agents</span> */}
                <h2>Our Agents</h2>
            </div>
            <div className='agents-row'>
                {
                    details.map((detail=>{
                        return(
                            <div className='agent-column'>
                                <div className='agent-card'>
                                    <div className="agent-thumb">
                                        <img src={detail.Image} alt="agent"/>
                                        <div className='social-link'>
                                        <ul>
                                            <li>
                                                <a href='#'><i className='fa-brand fa-facebook-f'></i></a>
                                            </li>
                                            <li>
                                                <a href='#'><i className='fa-brand fa-facebook-f'></i></a>
                                            </li>
                                            <li>
                                                <a href='#'><i className='fa-brand fa-facebook-f'></i></a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>

                                    <div className="agent-info">
                                        <h3>{detail.name}</h3>
                                        <p>{detail.info}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
                }
            </div>
        </section>
    </Fragment>
  )
}

export default Agents