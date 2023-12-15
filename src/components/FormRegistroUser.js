import React, { useState } from "react";
/// PENDIENTE
const FormRegistroUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contacts: "",
    position: { lat: "", lon: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
};
