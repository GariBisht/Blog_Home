import React from 'react'

const reviewProduct = ({params ,}:{params :{productId : string , reviewId : string}}) => {
    
  return (
    <div>
      Dynamic Routing Details 
    <p> Given Product ID -:{params.productId} </p> 
    {/* <p></p> */}
    <p>{params.reviewId}</p>
    </div>
  )
}

export default reviewProduct ;

