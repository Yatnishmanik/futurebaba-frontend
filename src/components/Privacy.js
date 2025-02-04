import React from "react";

import Header from "./Header";
export default function Privacy() {
  return (
    <>
      <Header />
      <div class="privacyclass">
        <h1 style={{color:"#325090"}}>Business Policy for FutureBaba.in</h1>
        <p>
          Welcome to FutureBaba.in! We are a cutting-edge platform that provides
          future predictions based on data derived from social media. Our
          service is designed to deliver insights that help individuals and
          businesses make informed decisions. This document outlines the terms
          and policies governing our services.
        </p>

        <h2>Scope of Service</h2>
        <ul>
          <li>
            FutureBaba.in analyzes publicly available data on social media to
            generate predictions.
          </li>
          <li>
            Predictions may include trends, behaviors, potential outcomes, and
            other insights based on the data collected.
          </li>
          
        </ul>

        <h2>Service Charges</h2>
        <ul>
          <li>
            Each prediction generated by FutureBaba.in is charged at a flat rate
            of <strong>1 Rupee per prediction</strong>.
          </li>
          <li>
            Payments must be made in advance or as per the agreed payment terms.
          </li>
        </ul>

        <h2>Payment Policy</h2>
        <ul>
          <li>Payments are accepted through secure online gateways.</li>
        </ul>

        <h2> Contact Us</h2>
        <p>For any queries, please contact us at:</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:support@futurebaba.in">support@futurebaba.in</a>
          </li>
          <li>
            Website: <a href="https://www.futurebaba.in">www.futurebaba.in</a>
          </li>
        </ul>
        <a href='/'>back</a>
      </div>
    </>
  );
}
