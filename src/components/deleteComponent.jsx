import Button from "./Button";

const DeleteComponent = (props) => {
  function handleClose(e) {
    console.log("clicked");
    props.handleExit(false)
  }
  return (
    <div className="backdrop">
      <div className="delete-confirmation">
        <p onClick={handleClose}>X</p>
        <h2>Are you sure? </h2>
        <h3>Do you really want to delete employee?</h3>
        <div className="confirmation-buttons">
          <Button
            text="Confirm"
            buttonClassName="confirm-button"
            handleSubmit={handleClose}
          />
          <Button
            text="Cancel"
            buttonClassName="cancel-button"
            handleSubmit={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteComponent;
