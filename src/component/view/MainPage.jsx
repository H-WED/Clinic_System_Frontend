import apiURL from "../api/apiURL.js";
import MainPageCard from "../Entity/MainPageCard.jsx";
import { useEffect, useState } from "react";

function MainPage() {
  //Initialization
  console.log("MainPage is running");
  const ClinicEndpoint = `${apiURL}/clinic`;

  //State
  const [clinics, setClinics] = useState(null);
  const apiGet = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setClinics(result);
    } catch (error) {
      console.error("API error:", error);
    }
  };
  useEffect(() => {
    apiGet(ClinicEndpoint);
  }, [ClinicEndpoint]);

  return (
    <>
      <MainPageCard clinic_content={clinics} />
    </>
  );
}

export default MainPage;
