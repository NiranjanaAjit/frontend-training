import FormComponent
 from "./FormComponent";
import { useParams } from "react-router-dom";
const EditEmployee = () =>{
    let {id} = useParams();
    console.log(id)
    return (
        <main>
    
    
        {/* <div className="create-employee"> */}
          <section className="sections">
            <h1>Edit Employee</h1>
          </section>
          <section className="sections">
            <FormComponent employeeId={id}/>
          </section>
        {/* </div> */}
        </main>
      );
}

export default EditEmployee;