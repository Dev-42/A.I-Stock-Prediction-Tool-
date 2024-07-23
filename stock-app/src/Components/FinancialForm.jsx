import React, { useState } from "react";
import styles from "./FinancialForm.module.css";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
console.log(API_KEY);

const FinancialForm = ({ setResult }) => {
  const [values, setValues] = useState({
    marketCap: "",
    EPS: "",
    bookValue: "",
    ROCE: "",
    OPM5Year: "",
    ROE: "",
    IntCoverage: "",
    DebttoEquityRatio: "",
    StockPE: "",
    PreviousYearEPS: "",
    CurrentYearEPS: "",
    DividendYeild: "",
  });

  const [isSent, setIsSent] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const trainingPrompt = [
      {
        parts: [
          {
            text: "From the next prompt I am gonna send you some parameters for predicting shares in  stock market for long term of 5 years,tell me whether it is overvalued,undervalued or fairly valued and I should buy it or not.Make the color of overvalued as red,undervalued as green and fairly valued as also green",
          },
        ],
        role: "user",
      },
      {
        role: "model",
        parts: [
          {
            text: "okay",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "and also calculate - P/E ratio , P/B ratio,P/S ratio, Dividend Yeild , Earnings Growth in % , Debt-to-Equity ratio, ROE % and give as a response",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "okay",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "always give response in form of HTML div and table tag",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "okay",
          },
        ],
      },
    ];

    let url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBsGVUv7DBPrZwqbfd_ccN19UGjajusxEA";

    let messagesToSend = [
      ...trainingPrompt,
      {
        role: "user",
        parts: [
          {
            text: JSON.stringify(values),
          },
        ],
      },
    ];

    setIsSent(false);
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        contents: messagesToSend,
      }),
    });
    let resJSON = await res.json();
    setIsSent(true);
    console.log(resJSON);
    let resMessage = resJSON.candidates[0].content.parts[0].text;
    console.log(resMessage);
    setResult(resMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form action="" className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Financial Form</h2>
      <div className={styles.inputGroup}>
        <label>Market Capitalization Per Share:</label>
        <input
          type="number"
          name="marketCap"
          value={values.marketCap}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Stock P/E Per Share:</label>
        <input
          type="number"
          name="StockPE"
          value={values.StockPE}
          onChange={handleChange}
          className={styles.inputField}
          required
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
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>ROCE Per Share:</label>
        <input
          type="number"
          name="ROCE"
          value={values.ROCE}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Operating Profit Margin(OPM) of 5 Years Per Share:</label>
        <input
          type="number"
          name="OPM5Year"
          value={values.OPM5Year}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Return On Equity(ROE) Per Share:</label>
        <input
          type="number"
          name="ROE"
          value={values.ROE}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Interest Coverage Ratio Per Share:</label>
        <input
          type="number"
          name="IntCoverage"
          value={values.IntCoverage}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Debt to Equity Ratio Per Share:</label>
        <input
          type="number"
          name="DebttoEquityRatio"
          value={values.DebttoEquityRatio}
          onChange={handleChange}
          className={styles.inputField}
          required
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
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Previous Year EPS Per Share:</label>
        <input
          type="number"
          name="PreviousYearEPS"
          value={values.PreviousYearEPS}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Current Year EPS Per Share:</label>
        <input
          type="number"
          name="CurrentYearEPS"
          value={values.CurrentYearEPS}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Dividend Yeild in % Per Share:</label>
        <input
          type="number"
          name="DividendYeild"
          value={values.DividendYeild}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      {isSent ? (
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      ) : (
        <ScaleLoader />
      )}
    </form>
  );
};

export default FinancialForm;
