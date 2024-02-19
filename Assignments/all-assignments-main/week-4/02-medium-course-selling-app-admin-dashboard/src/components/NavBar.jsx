import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <NavLink to={"/about"}>Create Course</NavLink>
        <NavLink to={"/courses"}>My Courses</NavLink>
      </div>
    </>
  );
}

export default NavBar;
