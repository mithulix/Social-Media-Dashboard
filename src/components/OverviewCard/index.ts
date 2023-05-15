import { ReactComponent as DownSvg } from "../../assets/icon-down.svg";
import { ReactComponent as UpSvg } from "../../assets/icon-up.svg";
import { ReactComponent as FacebookSvg } from "../../assets/icon-facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/icon-instagram.svg";
import { ReactComponent as TwitterSvg } from "../../assets/icon-twitter.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/icon-youtube.svg";
import { fakeOverviewData } from "../../api/api";
import { useState } from "react";

import "./styles.scss";

// Define the type for the props passed to this component
type Props = {
  data: fakeOverviewData;
};

// Helper function to calculate random numbers for the component
function calculateNumbers(numbers: fakeOverviewData) {
  const total = Math.floor(Math.random() * 10000); // Generate a random total number
  const status = Math.random() < 0.5; // Generate a random status (true or false)
  const percent = Math.floor(Math.random() * 1000); // Generate a random percentage
  return {
    total,
    status,
    percent
  };
}

// Define the OverviewCard component
export function OverviewCard({ data }: Props) {
  // Set the initial state of latestNumbers to null using the useState hook
  const [latestNumbers] = useState<fakeOverviewData | null>(null);
  
  // If there's no data passed to the component, return null
  if (!data) {
    return null;
  }

  // Calculate the overview numbers based on the latestNumbers or the data passed to the component
  const overviewNumbers = calculateNumbers(latestNumbers || data);

  // Helper function to render the appropriate SVG icon based on the type of social media
  function iconSvg(type: string) {
    switch (type) {
      case "instagram":
        return <InstagramSvg />;
      case "facebook":
        return <FacebookSvg />;
      case "youtube":
        return <YoutubeSvg />;
      default:
        return <TwitterSvg />;
    }
  }

  // Render the component
  return (
    <div id="overview-card-container">
      <div id="left-content" className="align-content">
        <span>{data.title}</span>
        <strong>{overviewNumbers.total}</strong>
      </div>
      <div id="right-content" className="align-content">
        {/* Render the appropriate SVG icon */}
        {iconSvg(data.type)}
        <div
          id="percent-overview"
          // Apply a class based on the status
          className={overviewNumbers.status ? "green-status" : "red-status"}
        >
          {/* Render the appropriate SVG icon based on the status */}
          {overviewNumbers.status ? <UpSvg /> : <DownSvg />}
          <span id="margin-left">{overviewNumbers.percent}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
}
