const SelectField = (props) => {
  let filledValue = "0"
  if (props.value){
    filledValue = props.value;
  }
  const onChange= (e)=> {
    if(props.onChange)props.onChange(e.target.name, e.target.value)
  }
let text=""
  if (props.id == "status"){
    text="Status"
  }
  else {
    text = `Choose ${props.id}`
  }
  return (
    <div className={props.divClassName}>
      <label>{props.label}</label>
      <select name={props.name} id={props.id} required defaultValue={filledValue} onChange={onChange} >
        <option value="0">{text}</option>
        {props.options.map((optionValue) => {
          return (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
