import React from "react";
import styles from "./Result.module.css";

const Result = ({ result }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: result }}
      className={styles.resultDiv}
    ></div>
  );
};

export default Result;
