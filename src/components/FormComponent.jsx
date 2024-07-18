import { useEffect, useState } from "react";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { actionTypes } from "../store/useReducer.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useGetEmployeeDetailsQuery,
  useLazyGetEmployeeDetailsQuery,
} from "../pages/employees/api.js";

const FormComponent = (props) => {
  const { id } = useParams();
  const { data = [], isSuccess } = useGetEmployeeDetailsQuery(id);
  console.log(data);
  let buttonText = "Create";
  let defaultValue = "";
  if (props.employeeId) {
    defaultValue = props.employeeId;
    buttonText = "Edit";
  }

  const [fillData, setFillData] = useState({
    name: "" || data?.name,
    id: defaultValue,
    date: "",
    email: "" || data?.email,
    age: "" || data?.age,
    role: "" || data?.role,
    status: "" || data?.status,
    experience: "" || data?.experience,
    line1: "" || data?.address?.line1,
    pincode: "" || data?.address?.pincode,
    department: "" || data?.department?.departmentName,
  });

  useEffect(() => {
    if (data && isSuccess)
      setFillData({
        name: data?.name,
        id: defaultValue,
        email: data?.email,
        age: data?.age,
        role: data?.role,
        status: data?.status,
        experience: data?.experience,
        line1: data?.address?.line1,
        pincode: data?.address?.pincode,
        department: data?.department?.departmentName,
      });
  }, [data, isSuccess]);

  const fields = [
    {
      name: "name",
      label: "Employee Name",
      divClassName: "single-field",
      type: "text",
    },
    {
      name: "id",
      label: "Employee ID",
      divClassName: "single-field",
      type: "text",
      default: defaultValue,
    },
    {
      name: "email",
      label: "Employee Email",
      divClassName: "single-field",
      type: "email",
    },
    {
      name: "date",
      label: "Joining Date",
      divClassName: "single-field",
      type: "date",
    },
    {
      name: "department",
      label: "Department",
      divClassName: "single-field",
      id: "department",
      options: ["CONSULTING", "TESTING", "DEVOPS"],
      Component: SelectField,
    },
    {
      name: "role",
      label: "Role",
      divClassName: "single-field",
      id: "role",
      options: ["UI", "UX", "DEVELOPER", "HR"],
      Component: SelectField,
    },
    {
      name: "status",
      label: "Status",
      divClassName: "single-field",
      id: "status",
      options: ["Active", "Inactive", "Probation"],
      Component: SelectField,
    },
    {
      name: "experience",
      label: "Experience",
      divClassName: "single-field",
      type: "number",
    },
    {
      name: "age",
      label: "Age",
      divClassName: "single-field",
      type: "age",
    },
    {
      name: "line1",
      label: "Address",
      divClassName: "single-field",
      type: "text",
    },
    {
      name: "pincode",
      label: "Pincode",
      divClassName: "single-field",
      type: "text",
    },
  ];
  useEffect(() => {
    console.log("hello");
  }, []);

  const onChange = (name, value) => {
    const v = fillData[name];
    setFillData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let url = useParams();
  const goToList = () => {
    console.log(":)");
  };

  const createOrEdit = (e) => {
    const dataForDb = {
      name: fillData.name,
      email: fillData.email,
      password: "hello",
      age: parseInt(fillData.age),
      experience: parseInt(fillData.experience),
      status: fillData.status,
      role: fillData.role,
      address: {
        line1: fillData.line1,
        pincode: fillData.pincode,
      },
      department: {
        departmentName: fillData.department,
      },
    };
    props.handleCreateOrEdit(dataForDb);
  };

  return (
    <form>
      <div className="employee-data-fields">
        {fields.map((field) => {
          // setCount(count+1);
          const attribute = field.name;
          const filledValue = fillData[attribute];

          // console.log(attribute,filledValue)
          return field.Component ? (
            <field.Component
              key={field.label}
              {...field}
              onChange={onChange}
              name={field.name}
              value={filledValue}
            />
          ) : (
            <TextField
              key={field.label}
              {...field}
              onChange={onChange}
              name={field.name}
              value={filledValue}
            />
          );
        })}
      </div>
      <Link className="submit-buttons" to="/employees/list">
        <Button
          text={buttonText}
          buttonClassName="create-button"
          handleSubmit={createOrEdit}
        />
        <Button
          text="Cancel"
          buttonClassName="cancel-button"
          handleSubmit={goToList}
        />
      </Link>
    </form>
  );
};

export default FormComponent;
