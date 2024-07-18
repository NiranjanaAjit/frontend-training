import "../styles/WelcomeStyles.scss";
import { v4 as uuidv4 } from "uuid";
import FormComponent from "../components/FormComponent";
import "../createEmployeeStyles.scss";
// import { addEmployee } from "../store/employeeReducer";
import { useDispatch } from "react-redux";
import { useAddEmployeeMutation } from "./employees/api";

const CreateEmployee = () => {
  const [addEmployee, { isSuccess}] = useAddEmployeeMutation();
  // const dispatch = useDispatch();
  const handleCreate = (data) => {
    console.log(data)
    addEmployee(data)

  };
  return (
    <main>
      <section className="heading">
        <h1>Create Employee</h1>
      </section>
      <section className="sections">
        <FormComponent handleCreateOrEdit={handleCreate} />
      </section>
    </main>
  );
};

export default CreateEmployee;
