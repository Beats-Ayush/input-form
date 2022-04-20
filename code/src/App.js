import React from "react";
import CardForm from "./components/CardForm";
import CardInfo from "./components/CardInfo";
import "./css/main.css";

const App = () => {
  return (
    <main className="container">
      <h1 className="sr-only">
        Frontend Mentor | Intro component with sign up form
      </h1>
      <div className="card">
        <CardInfo />
        <CardForm />
      </div>
    </main>
  );
};

export default App;
