import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">SDA starter template</h4>
                <p>This starter template is based on Spring, PostgreSQL, React, React router and Axios. Check the following links for documentation and guides:</p>
                <ul>
                <Link to="/assignmentPost" className="nav-link">
                            Assignment Post By teacher
                </Link>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;