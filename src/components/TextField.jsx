import { forwardRef, useEffect, useRef, useState } from "react";

const TextField = forwardRef((props,ref) => {
  // const [text,setText]= useState("")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

  const onChange = (e)=> {
    if(props.onChange)props.onChange(e.target.name,e.target.value)
  }


  return (
    <span className={props.divClassName}>
      <label htmlFor="uname">{props.label}</label>
      {/* <br></br> */}
      <input type={props.type} ref={ref} name={props.name} id="uname" value={props.value} onChange={onChange} placeholder={props.label} />

    </span>
  );
});

export default TextField;
