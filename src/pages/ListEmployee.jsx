import EmployeeDetailsContent from "./EmployeeDetailsContent";

const ListEmployee = () => {
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
      experience: "4 years",
    },
    {
      name: "Jamie",
      id: "jamie@create.com",
      date: "2021-03-03",
      role: "Frontend Developer",
      status: "Active",
      experience: "2 years",
    },
    {
      name: "Taylor",
      id: "taylor@solution.com",
      date: "2020-11-12",
      role: "Data Analyst",
      status: "Probation",
      experience: "2 years",
    },
    {
      name: "Drew",
      id: "drew@enterprise.com",
      date: "2019-06-08",
      role: "System Administrator",
      status: "Probation",
      experience: "3 years",
    },
    {
      name: "Pat",
      id: "pat@network.com",
      date: "2022-02-20",
      role: "Network Engineer",
      status: "Active",
      experience: "1 year",
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
      status: "Inactive",
      experience: "1 year",
    },
    {
      name: "Morgan",
      id: "morgan@develop.com",
      date: "2018-07-19",
      role: "Backend Developer",
      status: "Active",
      experience: "4 years",
    },
    {
      name: "Jamie",
      id: "jamie@create.com",
      date: "2021-03-03",
      role: "Frontend Developer",
      status: "Inactive",
      experience: "2 years",
    },
    {
      name: "Sam",
      id: "sam@cloud.com",
      date: "2021-05-16",
      role: "Cloud Solutions Architect",
      status: "Active",
      experience: "2 years",
    },
  ];
  return (
    <main>
      <section className="sections">
        <h1>Employee List</h1>
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
        return <EmployeeDetailsContent content={employee} />;
      })}

      {/* </section> */}
    </main>
  );
};

export default ListEmployee;
