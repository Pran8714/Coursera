import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchCourse } from "../../features/courseDetailSlice";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  // const allCourses= useSelector((state) => state.app.courses);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchCourse(searchData));
  }, [searchData]);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navName">Coursera</div>
        <div className="navPages" ref={navRef}>
          <ul className="navUl">
            <li className="li">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginRight: "30px",
                }}
                to="/"
              >
                Courses
              </Link>
            </li>
            <li className="li">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="li">
              <div className="navForm">
                <form className="formMain" role="search">
                  <input
                    className="formSearch "
                    type="search"
                    placeholder="Search"
                    onChange={(e) => setSearchData(e.target.value)}
                  />
                  <button className="btnSearch" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </li>
            <button className="nav-btn nab-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </ul>
        </div>
        <button className="nav-btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
