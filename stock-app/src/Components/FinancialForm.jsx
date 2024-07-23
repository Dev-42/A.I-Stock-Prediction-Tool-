import React, { useState } from "react";
import styles from "./FinancialForm.module.css";

const FinancialForm = () => {
  const [values, setValues] = useState({
    marketPrice: "",
    EPS: "",
    bookValue: "",
    sales: "",
    annualDividends: "",
    previousEPS: "",
    currentEPS: "",
    totalDebt: "",
    totalEquity: "",
    netIncome: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form action="" className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Financial Form</h2>
      <div className={styles.inputGroup}>
        <label>Market Price Per Share:</label>
        <input
          type="number"
          name="marketPrice"
          value={values.marketPrice}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>EPS Per Share:</label>
        <input
          type="number"
          name="EPS"
          value={values.EPS}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Book Value Per Share:</label>
        <input
          type="number"
          name="bookValue"
          value={values.bookValue}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Sales Per Share:</label>
        <input
          type="number"
          name="sales"
          value={values.sales}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Annual Dividents Per Share:</label>
        <input
          type="number"
          name="annualDividends"
          value={values.annualDividends}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Previous EPS Per Share:</label>
        <input
          type="number"
          name="previousEPS"
          value={values.previousEPS}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Current EPS Per Share:</label>
        <input
          type="number"
          name="currentEPS"
          value={values.currentEPS}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Total Debt Per Share:</label>
        <input
          type="number"
          name="totalDebt"
          value={values.totalDebt}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Total Equity Per Share:</label>
        <input
          type="number"
          name="totalEquity"
          value={values.totalEquity}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Net Income Per Share:</label>
        <input
          type="number"
          name="netIncome"
          value={values.netIncome}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default FinancialForm;
