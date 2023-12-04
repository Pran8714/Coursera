import React from "react";
import "./AllCourses.css";
import image from "./image.jpg";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { showCourses } from "../../features/courseDetailSlice";
import { courseOne } from "../../features/courseDetailSlice";
import { useEffect } from "react";
import { useState } from "react";
import { increaseItemQuantity } from "../../features/courseDetailSlice";

const AllCourse = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");

  const { courses, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showCourses());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div className="radio">
        <input
          className="form-check-input"
          name="category"
          checked={radioData === " "}
          type="radio"
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label">
          <b>All</b>
        </label>
        <input
          className="form-check-input"
          name="category"
          checked={radioData === "React"}
          value="React"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">
          <b>React</b>
        </label>
        <input
          className="form-check-input"
          name="category"
          value="CSS"
          checked={radioData === "CSS"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">
          <b>CSS</b>
        </label>
        <input
          className="form-check-input"
          name="category"
          value="JavaScript"
          checked={radioData === "JavaScript"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">
          <b>JavaScript</b>
        </label>
      </div>
      <div>
        {courses &&
          courses
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })

            .filter((ele) => {
              if (radioData === "React") {
                return ele.category === radioData;
              } else if (radioData === "CSS") {
                return ele.category === radioData;
              } else if (radioData === "JavaScript") {
                return ele.category === radioData;
              } else return ele;
            })
            .map((ele) => (
              <div className="allmain">
                <div className="allrating">
                  <span className="allspan">
                    <b>Rating</b>&nbsp;:&nbsp;{ele.rating}
                  </span>
                  <span
                    className="allLike"
                    onClick={() => dispatch(increaseItemQuantity(ele.id))}
                  >
                    &#128077;{ele.likes}
                  </span>
                </div>
                <div className="allbox">
                  <div className="allimage">
                    <img
                      className="imageAll"
                      src={ele.thumbnail ? ele.thumbnail : image}
                      alt=""
                    />
                  </div>
                  <div className="alldetails">
                    <h4 className="alltitle">
                      <b>Course Name</b>&nbsp;:&nbsp;{ele.name}
                    </h4>
                    <h5 className="allinstructor">
                      <b>Instructor's Name</b>&nbsp;:&nbsp;{ele.instructor}
                    </h5>
                    <p className="allduration">
                      <b>Duration</b>&nbsp;:&nbsp;{ele.duration} min
                    </p>
                    <p className="allpre">
                      <b>Prerequisites</b>&nbsp;:&nbsp; html css
                    </p>
                    <Link
                      to={`/courseDetails/${ele.id}`}
                      onClick={() => dispatch(courseOne(ele.id))}
                      className="allview"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllCourse;
