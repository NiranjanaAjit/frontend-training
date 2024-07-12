// import "../styles.module.scss";


import FormComponent from "./FormComponent";
import { useEffect, useState } from "react";
import "../createEmployeeStyles.scss";
const CreateEmployee = () => {


  return (
    <main>


    {/* <div className="create-employee"> */}
      <section className="sections">
        <h1>Create Employee</h1>
      </section>
      <section className="sections">

        <FormComponent/>
      </section>
    {/* </div> */}
    </main>
  );
};

export default CreateEmployee;
