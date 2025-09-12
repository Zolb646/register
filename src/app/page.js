"use client";
import { useState } from "react";
import "./index.css";

export default function Home() {
  return (
    <div className="container">
      <div className="con">
        <div className="header-con">
          <div className="header">
            <img src="/Main 1.svg" />
            <h1>Join Us! 😎</h1>
            <p>Please provide all current information accurately.</p>
          </div>
          <div className="footer">
            <div className="input-container">
              <h1>First name *</h1>
              <input type="text" placeholder="Enter first name..." />
            </div>
            <div className="input-container">
              <h1>Last name *</h1>
              <input type="text" placeholder="Enter last name..." />
            </div>
            <div className="input-container">
              <h1>Username *</h1>
              <input type="text" placeholder="Enter username..." />
            </div>
          </div>
        </div>
        <div className="footer-con">
          <button>Continue 1/3 &gt;</button>
        </div>
      </div>
    </div>
  );
}
