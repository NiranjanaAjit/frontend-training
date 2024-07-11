const Button = ({text, buttonClassName, handleSubmit}) => {

  return <button type="submit" className={buttonClassName} onClick={handleSubmit}>{text}</button>;
};

export default Button;
