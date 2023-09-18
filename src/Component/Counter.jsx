import React, { Fragment, useState } from 'react';
import "../CSS/Counter.css";

const Counter = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <Fragment>
    <section className="counter">

    <div className="counter-container">
        <div className="counter-row">
        </div>
    </div>
    </section>
    
    </Fragment>
  )
}

export default Counter