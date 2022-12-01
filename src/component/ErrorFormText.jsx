import React from "react";

export default function ErrorFormText({ errors, field, data }) {

  if (data[field] && !errors[field]) {
    return null;
  }

  return <small className="text-danger">{errors[field]}</small>;
}
