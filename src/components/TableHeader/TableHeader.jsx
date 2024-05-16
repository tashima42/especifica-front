import React from "react";

const TableHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        padding: 5,
        gap: 180,
        backgroundColor: "#fac61f",
      }}
    >
      <div style={{ color: "white" }}>
        <p>Segunda</p>
      </div>
      <div style={{ color: "white" }}>
        <p>Terça</p>
      </div>
      <div style={{ color: "white" }}>
        <p>Quarta</p>
      </div>
      <div style={{ color: "white" }}>
        <p>Quinta</p>
      </div>
      <div style={{ color: "white" }}>
        <p>Sexta</p>
      </div>
      <div style={{ color: "white" }}>
        <p>Sábado</p>
      </div>
    </div>
  );
};

export default TableHeader;
