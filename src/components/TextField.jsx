import { forwardRef, useEffect, useRef, useState } from "react";

const TextField = forwardRef((props, ref) => {
  // const [text,setText]= useState("")

  const onChange = (e) => {
    if (props.onChange) props.onChange(e.target.name, e.target.value);
  };
  let defaultValue = props.value;
  let disabledValue = false
  if(props.default){
    disabledValue = true
    defaultValue = props.default;
  }

  return (
    <span className={props.divClassName}>
      <label htmlFor="uname">{props.label}</label>
      <input
        type={props.type}
        ref={ref}
        name={props.name}
        id="uname"
        value={defaultValue}
        onChange={onChange}
        placeholder={props.label}
        disabled = {disabledValue}
      />
    </span>
  );
});

export default TextField;
