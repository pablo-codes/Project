import React from 'react'

import SectionA from './body/SectionA'
import SectionB from './body/SectionB'

const Product = (props) => {
   
    return (
        <div>
           
            <SectionA id={props.id} title={props.title} author={props.author} image={props.image} date={props.date} />
            <SectionB id={props.id} title={props.title} author={props.author}  image={props.image} description={props.description} features={props.features}/>
        </div>
    )
}

export default Product