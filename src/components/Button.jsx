const Button = ({text, buttonClassName, handleSubmit}) => {

  return <button type="submit" className={buttonClassName} onClick={(e)=>handleSubmit(e)}>{text}</button>;
};

export default Button;
