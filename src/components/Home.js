import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Link to="/add">
          <button>Add Employee</button>
        </Link>

      </div>
    </React.Fragment>
  );
};
export default Home;