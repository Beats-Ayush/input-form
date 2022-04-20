import React from "react";
import Form from "./Form";

const CardForm = () => {
  return (
    <div className="card-form">
      <article className="try-it-free">
        <span className="highlight">Try it free 7 days</span> then $20/mo.
        thereafter
      </article>
      <Form />
    </div>
  );
};

export default CardForm;
