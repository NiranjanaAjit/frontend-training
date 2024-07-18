import FormComponent from "../components/FormComponent";
import { useOutletContext, useParams } from "react-router-dom";
import { useEditEmployeeMutation } from "./employees/api.js";
import { useEffect } from "react";

const EditEmployee = () => {
  const { id } = useParams();
  const [editEmployee, { isSuccess, isError, error }] =
    useEditEmployeeMutation();
  const handleEdit = (data) => {
    const dbData = {
      ...data,
      id: id,
    };
    editEmployee(dbData);
  };
  return (
    <main>
      <section className="heading">
        <h1>{`Edit Employee Details of ${id}`}</h1>
      </section>
      <section className="sections">
        <FormComponent employeeId={id} handleCreateOrEdit={handleEdit} />
      </section>
      {/* </div> */}
    </main>
  );
};

export default EditEmployee;
