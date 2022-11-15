import React from "react";

// TODO: stopped here
// style span elements

const TitleAndContent = ({ title, content }) => {
  return (
    <span>
      <span>{title}:</span>
      <span>{content}</span>•
    </span>
  );
};

export default TitleAndContent;

TitleAndContent.defaultProps = {
  title: "Staff ID",
  content: "OYO/02/0399",
};
