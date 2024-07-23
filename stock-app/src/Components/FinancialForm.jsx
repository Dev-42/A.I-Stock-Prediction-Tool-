import React, { useState } from "react";
import styles from "./FinancialForm.module.css";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
console.log(API_KEY);

const FinancialForm = ({ setResult }) => {
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

  const [isSent, setIsSent] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const trainingPrompt = [
      {
        parts: [
          {
            text: "From the next prompt I am gonna send you some parameters for predicting stock market share,tell me it is overvalued or undervalued and I should buy it or not",
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
