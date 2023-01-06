// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({ type: type, message: message });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const handleMode = () => {
    if (mode === "light") {
      showAlert("success", "Dark mode has been enabled.");
      setMode("dark");
      document.body.style.backgroundColor = "#393939";
      console.log("converted to dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      console.log("converted to light");
      showAlert("Success", "Light mode has been enabled.");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        handleMode={handleMode}
      />
      <Alert alert={alert} />
      <div
        style={{
          color: mode === "dark" ? "white" : "black",
        }}
        className="container my-3"
      >
        <Textarea
          alert={alert}
          showAlert={showAlert}
          headingText="Enter your text to analyze"
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
