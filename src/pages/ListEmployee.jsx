import SelectField from "../components/SelectField";
import EmployeeDetailsContent from "./EmployeeDetailsContent";
import { useNavigate, Link } from "react-router-dom";

const ListEmployee = () => {
  const navigate = useNavigate();
  const employees = [
    {
      id: "niranjana@gg.com",
      name: "Niranjana",
      date: "2020-10-03",
      role: "Developer",
      status: "Active",
      address: "Mananthavady",
      experience: "2 years",
    },
    {
      name: "Shaheen",
      id: "shaheen@fun.com",
      date: "2021-09-01",
      role: "Software Developer",
      status: "Inactive",
      experience: "2 years",
    },
    {
      name: "Alex",
      id: "alex@company.com",
      date: "2020-08-15",
      role: "Project Manager",
      status: "Active",
      experience: "5 years",
    },
    {
      name: "Jordan",
      id: "jordan@tech.com",
      date: "2019-04-22",
      role: "UI/UX Designer",
      status: "Active",
      experience: "3 years",
    },
    {
      name: "Casey",
      id: "casey@innovate.com",
      date: "2022-01-10",
      role: "Marketing Specialist",
      status: "Probation",
      experience: "1 year",
    },
    {
      name: "Morgan",
      id: "morgan@develop.com",
      date: "2018-07-19",
      role: "Backend Developer",
      status: "Probation",
      department:"Consulting",
      experience: "4 years",
    },
    {
      name: "Jamie",
      id: "jamie@create.com",
      date: "2021-03-03",
      role: "Frontend Developer",
      status: "Active",
      department:"Consulting",
      experience: "2 years",
    },
    {
      name: "Taylor",
      id: "taylor@solution.com",
      date: "2020-11-12",
      role: "Data Analyst",
      status: "Probation",
      department:"Consulting",
      experience: "2 years",
    },
    {
      name: "Drew",
      id: "drew@enterprise.com",
      date: "2019-06-08",
      role: "System Administrator",
      status: "Probation",
      department:"Consulting",
      experience: "3 years",
    },
    {
      name: "Pat",
      id: "pat@network.com",
      date: "2022-02-20",
      role: "Network Engineer",
      status: "Active",
      department:"Consulting",
      experience: "1 year",
    },
    {
      name: "Jordan",
      id: "jordan@tech.com",
      date: "2019-04-22",
      role: "UI/UX Designer",
      status: "Active",
      department:"Consulting",
      experience: "3 years",
    },
    {
      name: "Casey",
      id: "casey@innovate.com",
      date: "2022-01-10",
      role: "Marketing Specialist",
      status: "Inactive",
      department:"Consulting",
      experience: "1 year",
    },
    {
      name: "Morgan",
      id: "morgan@develop.com",
      date: "2018-07-19",
      role: "Backend Developer",
      status: "Active",
      department:"Consulting",
      experience: "4 years",
    },
    {
      name: "Jamie",
      id: "jamie@create.com",
      date: "2021-03-03",
      role: "Frontend Developer",
      status: "Inactive",
      department:"Consulting",
      experience: "2 years",
    },
    {
      name: "Sam",
      id: "sam@cloud.com",
      date: "2021-05-16",
      role: "Cloud Solutions Architect",
      status: "Active",
      department:"Consulting",
      experience: "2 years",
    },
  ];
  let count = 0;
  const field = {
    name: "statusField",
    label: "",
    divClassName: "statusField",
    id: "status",
    options: ["Active", "Inactive", "Probabtion"],
    Component: SelectField,
  };
  function handleSelect() {
    navigate("/create");
  }
  return (
    <main>
      <section
        className="sections"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1 style={{ width: "50%" }}>Employee List</h1>
        <h4>Filter By</h4>
        {/* <div style={{backgroundColor:"lightblue",borderRadius:"20px",margin:"2%",padding:"10px"}}>Status</div> */}
        <SelectField {...field} />
        <Link className="link-styles" to="/employees/create">
          <div className="create-employee-button">
            <div className="plus-sign">+</div>
            <h3>Create Employee</h3>
          </div>
        </Link>
      </section>
      {/* <section className="sections"> */}
      <div className="employeeDetailsHeader">
        <div className="employeeAttribute">Employee Name</div>
        <div className="employeeAttribute">Employee ID</div>
        <div className="employeeAttribute">Joining Date</div>
        <div className="employeeAttribute">Role</div>
        <div className="employeeAttribute">Status</div>
        <div className="employeeAttribute">Experience</div>
        <div className="employeeAttribute">Action</div>
      </div>
      {employees.map((employee) => {
        count += 1;
        return <EmployeeDetailsContent key={count} content={employee} />;
      })}

      {/* </section> */}
    </main>
  );
};

export default ListEmployee;
