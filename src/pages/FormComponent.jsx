import { useState } from "react";
import SelectField from "../components/SelectField";
import TextField from "../components/TextField";
import Button from "../components/Button";

const FormComponent = (params) => {
  let defaultValue = ""
  if(params.employeeId){
  defaultValue =  params.employeeId
  }
  const [data, setData] = useState({
    name: "",
    id: "",
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
      <div className="submit-buttons">
        <Button text="Create" buttonClassName="create-button" />
        <Button text="Cancel" buttonClassName="cancel-button" />
      </div>
    </form>
  );
};

export default FormComponent;
