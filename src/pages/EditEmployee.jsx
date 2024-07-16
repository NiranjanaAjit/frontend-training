import FormComponent from "./FormComponent";
import { useOutletContext, useParams } from "react-router-dom";
import { actionTypes } from "./useReducer.jsx";

const EditEmployee = () => {
  const {state,dispatch} = useOutletContext();
  let { id } = useParams();
  console.log(id);
  const handleEdit = (data) => {
    // e.preventDefault();
    console.log(data)
    dispatch({
      type:actionTypes.EDIT_EMPLOYEE,
      payload: data
    })
    console.log("entered edit")
  }
  return (
    <main>
      {/* <div className="create-employee"> */}
      <section className="heading">
        <h1>{`Edit Employee Details of ${id}`}</h1>
      </section>
      <section className="sections">
        <FormComponent employeeId={id} handleCreateOrEdit={handleEdit}/>
      </section>
      {/* </div> */}
    </main>
  );
};

export default EditEmployee;
