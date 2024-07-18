import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useLazyGetEmployeeDetailsQuery,
  useGetEmployeeListQuery,
  useGetEmployeeDetailsQuery,
} from "./employees/api";
import Status from "./Status";
import WhitePencil from "../assets/pencil-white.svg";
import "../styles/DetailsOfEmployeeStyles.scss";
import { useSelector } from "react-redux";

const DetailsOfEmployee = () => {
  const params = useParams();
  const [fetchEmployees, { data: employee }] = useLazyGetEmployeeDetailsQuery();
  useEffect(() => {
    console.log("inside useeffect")
    if (!!params?.id) fetchEmployees(params?.id);
  }, [params]);
  console.log(employee)

  const date= new Date(employee?.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  return (
    <main>
      <section className="heading">
        <h1>Employee Details</h1>
        <Link className="link-styles" to={`/employees/edit/${params?.id}`}>
          <div className="edit-employee-button">
            <div className="edit-sign">
              <img src={WhitePencil} alt="edit-icon" />
            </div>
            <h3>Edit</h3>
          </div>
        </Link>
      </section>
      {/* {data.map((employee) => { */}
      {/* return ( */}
      <div className="individualsDetails">
      <div className="detail-div">
          <h4>Employee ID</h4>
          <div className="data-div">{employee?.id}</div>
        </div>

        <div className="detail-div">
          <h4>Employee Name</h4>
          <div className="data-div">{employee?.name}</div>
        </div>
        <div className="detail-div">
          <h4>Employee Email</h4>
          <div className="data-div">{employee?.email}</div>
        </div>
        <div className="detail-div">
          <h4>Status</h4>
          <Status status={employee?.status} />
        </div>

        <div className="detail-div">
          <h4>Department</h4>
          <div className="data-div">{employee?.department?.departmentName}</div>
        </div>
        <div className="detail-div">
          <h4>Role</h4>
          <div className="data-div">{employee?.role}</div>
        </div>

        <div className="line-div"></div>

        <div className="detail-div">
          <h4>Address</h4>
          <div className="data-div">{employee?.address?.line1}<br/>{employee?.address?.pincode}</div>
        </div>
        <div className="detail-div">
          <h4>Joining Date</h4>
          <div className="data-div">{date}</div>
        </div>
        <div className="detail-div">
          <h4>Experience</h4>
          <div className="data-div">{employee?.experience} years</div>
        </div>
        </div>

    </main>
  );
};

export default DetailsOfEmployee;
