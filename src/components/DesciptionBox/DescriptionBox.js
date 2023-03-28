import classes from "./DescriptionBox.module.css";
import React from "react";

const DescriptionBox = ({ company, position, longDesc, techDesc }) => {
  const hasCompanyOrPosition = !!company || !!position;
  return (
    <div className={classes.DescriptionBox}>
      {hasCompanyOrPosition && (
        <>
        <div className={classes.CompanyDescription}>
          {company && (
            <div>
              <span>
                <strong>Company:</strong>
                &nbsp;
                {company}
              </span>
              <br />
            </div>
          )}
          {position && (
            <div>
              <span>
                <strong>Position:</strong>
                &nbsp;
                {position}
              </span>
              <br />
            </div>
          )}
        </div>
        <br />
        </>
      )}

      <strong>Description:</strong>
      <br />
      {longDesc}
      <br />
      <br />
      <strong>Tech Stack</strong>
      <br />
      <ul>
        {techDesc.map((el, idx) => (
          <li key={`${idx}-${el}`}>{`- ${el}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionBox;
