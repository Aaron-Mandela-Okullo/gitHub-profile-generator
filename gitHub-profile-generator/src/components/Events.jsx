import React from "react";

const Events = ({events}) => {
  return <>
  {events?.map((ev,i)=>(
   <div key={i}>
    <img src={ev.actor?.avatar_url} alt="" />
   </div> 
  ))}
  </>;
};

export default Events;
