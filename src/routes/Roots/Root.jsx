import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Root.css";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";

export default function Root() {
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
            </div>
        </div>
    );
}
