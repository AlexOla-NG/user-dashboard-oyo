import React from "react";
import TitleAndContent from "./TitleAndContent";

const TitleAndContentWrapper = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => {
        return <TitleAndContent key={index} {...item} />;
      })}
    </div>
  );
};

export default TitleAndContentWrapper;

TitleAndContentWrapper.defaultProps = {
  content: [
    { title: "Staff ID", content: "OYO/02/0399" },
    { title: "Middle Name", content: "Dorcas" },
    { title: "Gender", content: "Female" },
  ],
};
