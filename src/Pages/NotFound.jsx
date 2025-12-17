// // Pages/NotFound.js
// import React from "react";

// function NotFound() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>404</h1>
//       <p>Page Not Found 😢</p>
//     </div>
//   );
// }

// export default NotFound;











import React from "react";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          padding: "50px 40px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#D1A84B",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <p
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >
          Sahifa Topilmadi 😢
        </p>

        <p
          style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Kechirasiz, Siz mavjud bo'lmagan sahifaga kirmoqchisiz.
        </p>

        <a
          href="/Login"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            backgroundColor: "#D1A84B",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Ortga Qaytish
        </a>
      </div>
    </div>
  );
}

export default NotFound;