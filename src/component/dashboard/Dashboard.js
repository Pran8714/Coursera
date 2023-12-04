import React from "react";
import "./Dashboard.css";
import image from "./image.jpg";
import { useSelector } from "react-redux";
const AllCourse = () => {
  const { dash } = useSelector((state) => state.app);
  return (
    <div>
      {dash.map((ele) => (
        <div className="allmain">
          <div className="allrating">
            <span className="check">
              <b>Mark as completed</b> <input type="checkbox" name="" id="" />
            </span>
            <span className="allspan">
              <b>rating</b>&nbsp;:&nbsp;{ele.rating}
            </span>
          </div>
          <div className="allbox">
            <div className="allimage">
              <img className="imageAll" src={image} alt="" />
            </div>
            <div className="alldetails">
              <h4 className="alltitle">
                <b>Course Name</b>&nbsp;:&nbsp;{ele.name}
              </h4>
              <h5 className="allinstructor">
                <b>Instructor's Name</b>&nbsp;:&nbsp;{ele.instructor}
              </h5>
              <p className="duration">
                <b>Duration</b>&nbsp;:&nbsp;{ele.duration} minutes
              </p>

              <div className="progressbar">
                {" "}
                <div
                  className="subprog"
                  style={{
                    height: "10px",
                    width: ele.progress,
                    background: "red",
                  }}
                ></div>
              </div>
              <div className="dashText">{ele.progress}% completed</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourse;
