import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Root.css";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addEmployees } from "../../Redux/Features/DemoFetch/DemoFetchSlice";
import { fetchEmployees } from "../../Redux/Features/DemoFetch/DemoFetchSlice";

export default function Root() {
    const employees= useSelector((state) => state.demoFetch.employees.data);
    // const loading = useSelector((state) => state.demoFetch.loading);
    const dispatch = useDispatch();
    const [employeeName, setEmployeeName] = useState("");
    const Fetcher = useEffect(() => {
        dispatch(fetchEmployees());
    }, []);

    const handleAddEmployee = () => {
        dispatch(addEmployees({ employee_name: employeeName }));
    };
    console.log(employees)

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/">
                            <img src={reactLogo} alt="REACT" />
                        </Link>
                    </li>
                    <li> + </li>
                    <li>
                        <Link className="link" to="/">
                            <img src={viteLogo} alt="REACT" />
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="outlet-container">
                <Outlet />
                <form onSubmit={handleAddEmployee}>
                    <input
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        placeholder="Enter employee name"
                    />
                    <button type="submit">Add Employee</button>
                </form>
                <div>
                    employees:
                    
                    {employees && employees.map((employee, indx) => (
                <div key={employee.id}>{indx+1}.{employee.name}</div>
            ))}
                </div>
            </div>
        </div>
    );
}
