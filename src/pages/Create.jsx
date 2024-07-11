// import "../styles.module.scss";
import TextField from "../components/TextField";
import Button from "../components/Button";
import SelectField from "../components/SelectField";
import { useEffect, useState } from "react";
import "../createEmployeeStyles.scss";
const CreateEmployee = () => {
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
    },
    {
      name: "date",
      label: "Joining Date",
      divClassName: "single-field",
      type: "text",
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
      options: ["q", "w", "e", "r"],
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

  return (
    <main>


    {/* <div className="create-employee"> */}
      <section className="sections">
        <h1>Create Employee</h1>
      </section>
      <section className="sections">
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
      </section>
    {/* </div> */}
    </main>
  );
};

export default CreateEmployee;
