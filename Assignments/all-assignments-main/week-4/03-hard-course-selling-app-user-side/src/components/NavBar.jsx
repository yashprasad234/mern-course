import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <NavLink to={"/course"}>Browse Courses</NavLink>
        <NavLink to={"/purchasedCourses"}>My Courses</NavLink>
      </div>
    </>
  );
}

export default NavBar;
