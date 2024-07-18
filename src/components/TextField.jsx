import { forwardRef, useEffect, useRef, useState } from "react";
import React from "react";
const TextField = forwardRef((props, ref) => {
  // useEffect(()=>{
  //   props.onChange(id,props.value)
  // },[])
  const onChange = (e) => {
    if (props.onChange) props.onChange(e.target.name, e.target.value);
  };

  let hidden = false;
  let defaultValue = props.value;
  let disabledValue = false;
  if (props.default) {
    disabledValue = true;
    defaultValue = props.default;
  } else if (props.default == "") {
    hidden = true;
  }

  return (
    <span className={props.divClassName} hidden={hidden}>
      <label htmlFor="uname" data-testid="textfield-label-test-id">{props.label}</label>
      <input
        data-testid="textfield-input-test-id"
        type={props.type}
        ref={ref}
        name={props.name}
        id="uname"
        value={props.value}
        placeholder={props.label}
        disabled={disabledValue}
        onChange={onChange}
      />
    </span>
  );
});

export default TextField;
