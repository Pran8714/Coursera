import React from "react";
import "./CourseDetails.css";
import image from "./image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { courseOne } from "../../features/courseDetailSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToDashboard } from "../../features/courseDetailSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [isActive, setIsActive] = useState(false);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const { details, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(courseOne(id));
  }, [id]);

  const addToDashboardHandler = (ele) => {
   
    dispatch(addToDashboard({ ...ele }));
    navigate("/dashboard")
  };

  const changeStyle = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="detail">
      {details &&
        details.map((ele) => (
          <div className="modal">
            <div className="detailimage">
              <img className="imageDetail" src={image} alt="" />
            </div>
            <div className="detailbox">
              <div className="detailall">
                <h4 className="alltitle">
                  <b>Course Name</b>&nbsp;:&nbsp;{ele.name}
                </h4>
                <h5 className="allinstructor">
                  <b>Instructor's Name</b>&nbsp;:&nbsp;{ele.instructor}
                </h5>
                <p className="allduration">
                  <b>Duration</b>&nbsp;:&nbsp;{ele.duration} min
                </p>
                <p className="detaildesc">
                  <b>Description</b>&nbsp;:&nbsp;{ele.description}
                </p>
                <p className="detailstatus">
                  <b>Status</b>&nbsp;:&nbsp;{ele.status}
                </p>
                <p className="detailScedule">
                  <b>Schedule</b>&nbsp;:&nbsp;{ele.schedule}
                </p>
                <div className="sylb" onClick={changeStyle}>
                  <b>Syllabus</b>&nbsp;:{isActive ? "▲" : "▼"}
                  <p
                    className="Syllabus"
                    style={{ display: isActive ? "block" : "none" }}
                  >
                    {" "}
                    {ele.syllabus}
                  </p>
                </div>
                <p className="detailLocation">
                  <b>Location</b>&nbsp;:&nbsp;{ele.location}
                </p>
                <p className="detailPreq">
                  <b>Prerequisite</b>&nbsp;:&nbsp;{ele.prerequisite}
                </p>
              </div>
              <div className="detailrating">
                <span className="rating">
                  <b>Rating</b>&nbsp;:&nbsp;{ele.rating}
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className="likes">
                  <b>Likes</b>&nbsp;:&nbsp;{ele.likes}
                </span>
              </div>
            </div>
            <div
              className="detailbutton"
              onClick={() => {
                addToDashboardHandler(ele);
              }}
            >
              <button className="mainButton">Enroll Now</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseDetails;
