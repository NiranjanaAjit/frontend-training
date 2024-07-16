import { useEffect, useState } from "react";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { actionTypes } from "./useReducer.jsx";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
// import { actionTypes } from "./useReducer.jsx";

const FormComponent = (props) => {
  // const params = useParams();
  // console.log("params")
  // console.log(params.lengt)
  const {state,dispatch} = useOutletContext();

  let defaultValue = "";
  if (props.employeeId) {
    defaultValue = props.employeeId;
  }

  const [data, setData] = useState({
    name: "",
    id: defaultValue,
    date: "",
    role: "",
    status: "",
    experience: "",
    address: "",
  });
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
      options: ["Consulting", "Testing", "DevOps"],
      Component: SelectField,
    },
    {
      name: "role",
      label: "Role",
      divClassName: "single-field",
      id: "role",
      options: ["design", "dev", "HR"],
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
      type: "text",
    },
    {
      name: "address",
      label: "Address",
      divClassName: "single-field",
      type: "text",
    },
  ];
  useEffect(()=>{
    console.log("hello")
  },[])

  const onChange = (name, value) => {
    console.log(data);
    // const {name, value} = e.target;
    console.log(name, value);
    const v = data[name];
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  let url = useParams();
  console.log(`url ${url}`);
  const goToList= ()=>{
    console.log(":)")
  }
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("hi");
    if (defaultValue) {
      dispatch({
        type:actionTypes.EDIT_EMPLOYEE,
        payload: {...data}
      })

      // console.log(state )
    }
    else{
      dispatch({
        type: actionTypes.ADD_EMPLOYEE,
        payload: { ...data, id: uuidv4() },
      });
    }

    goToList();
  };
  const createOrEdit =(e) =>{
    // e.preventDefault();
    console.log("Data from formvompo")
    console.log(data)
    props.handleCreateOrEdit(data)
  }

  return (
    <form>
      <div className="employee-data-fields">
        {fields.map((field) => {
          // setCount(count+1);
          return field.Component ? (
            <field.Component
              key={field.label}
              {...field}
              onChange={onChange}
              name={field.name}
              value={data[field.name]}
            />
          ) : (
            <TextField
              key={field.label}
              {...field}
              onChange={onChange}
              name={field.name}
            />
          );
        })}
      </div>
      <Link className="submit-buttons" to="/employees/list"> 
        <Button
          text="Create"
          buttonClassName="create-button"
          handleSubmit={createOrEdit}
        />
        <Button text="Cancel" buttonClassName="cancel-button" handleSubmit={goToList} />
      </Link>
    </form>
  );
};

export default FormComponent;
