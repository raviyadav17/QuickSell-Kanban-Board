import React from "react";
import "./Card.css";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiAdjust, BiLoader } from "react-icons/bi";
import { BsCheckCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";

const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src="https://media.istockphoto.com/id/1139722168/photo/mid-adult-man-smiling-on-gray-background.webp?b=1&s=170667a&w=0&k=20&c=Hk4bTLaIWEOAvY6v768OlpPycRLXLgZiPTjrT-rjCSY="
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (status === "Todo" ? (
            <FaRegCircle style={{ fontSize: "15px", color: "#ddeded" }} />
          ) : status === "In progress" ? (
            <BiAdjust style={{ fontSize: "15px", color: "#f2d750" }} />
          ) : status === "Done" ? (
            <BsCheckCircleFill />
          ) : status === "Backlog" ? (
            <BiLoader style={{ fontSize: "15px" }} />
          ) : (
            <IoMdCloseCircleOutline />
          ))}
        <span style={{ margin: "0.5px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <BsFillExclamationSquareFill />
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}

        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
