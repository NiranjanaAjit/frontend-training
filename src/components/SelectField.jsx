const SelectField = (props) => {

  const onChange= (e)=> {
    if(props.onChange)props.onChange(e.target.name, e.target.value)
  }
  return (
    <div className={props.divClassName}>
      <label>{props.label}</label>
      <select name={props.name} id={props.id} required defaultValue="0" onChange={onChange}>
        <option value="0">Choose {props.id}</option>
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
