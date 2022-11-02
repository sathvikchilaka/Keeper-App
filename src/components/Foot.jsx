import React from "react";
import "./Foot.css";

var Year = new Date().getFullYear();

export default function Foot() {
  return (
    <footer id="Footer">
      <p>Copyright (c) {Year}</p>
    </footer>
  );
}
