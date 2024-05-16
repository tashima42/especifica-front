import React from "react";

const TableRow = ({ id, horario, cinza }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ backgroundColor: "grey", padding: 10 }}>
        <div>
          <strong>
            <p>{id}</p>
          </strong>
        </div>
        <div style={{ width: 40 }}>
          <p>{horario}</p>
        </div>
      </div>
      <div
        style={{
          border: "1px solid black",
          width: 220,
          backgroundColor: cinza ? "lightgrey" : "white",
        }}
      ></div>
      <div
        style={{
          border: "1px solid black",
          width: 220,
          backgroundColor: cinza ? "lightgrey" : "white",
        }}
      ></div>
      <div
        style={{
          border: "1px solid black",
          width: 220,
          backgroundColor: cinza ? "lightgrey" : "white",
        }}
      ></div>
      <div
        style={{
          border: "1px solid black",
          width: 220,
          backgroundColor: cinza ? "lightgrey" : "white",
        }}
      ></div>
      <div
        style={{
          border: "1px solid black",
          width: 220,
          backgroundColor: cinza ? "lightgrey" : "white",
        }}
      ></div>
      <div
        style={{
          border: "1px solid black",
          width: 220,
          backgroundColor: cinza ? "lightgrey" : "white",
        }}
      ></div>
    </div>
  );
};

export default TableRow;
