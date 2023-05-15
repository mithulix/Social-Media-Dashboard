// Import ToggleButton component, useState hook and dataFake type from respective files
import { ToggleButton } from "../ToggleButton";
import { useState } from "react";
import { dataFake } from "../../api/api";
// Import styles for this component
import "./styles.scss";

// Define Props interface for Header component
type Props = {
  data: dataFake;
}

// Define function to calculate followers number
function calculateNumbers(numbers: dataFake) {
  const followers = Math.floor(Math.random() * 1000000) + 100000;
  return {
    followers
  };
}

// Define Header component with Props as parameter
export function Header({data}: Props) {
  // Declare state for latestNumbers with default value as null
  const [latestNumbers ] = useState<dataFake | null>(null);

  // If data is null, return null
  if (!data) {
    return null;
  }

  // Calculate dashboard numbers based on latestNumbers or data
  const dashboardNumbers = calculateNumbers(latestNumbers || data);

  // Render Header component
  return (
    <div id="container-header">
      {/* Render title and total followers */}
      <div id="title-container">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: {dashboardNumbers.followers}</span>
      </div>

      {/* Render toggle button and theme color */}
      <div id="toggle-container">
        <span id="theme-color">Dark Theme</span>
        <ToggleButton />
      </div>
    </div>
  );
}
