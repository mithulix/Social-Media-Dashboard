import { FollowersCard } from "../../components/FollowersCard";
import { Header } from "../../components/Header";
import { OverviewCard } from "../../components/OverviewCard";
import { useEffect, useState } from "react";
import { getDataFake, getFakeOverviewData } from "../../api/api";
import { dataFake, fakeOverviewData } from "../../api/api";
import "./styles.scss";

export function Dashboard() {
  const [data, setData] = useState<dataFake[]>([]); // State for followers data
  const [dataOverview, setDataOverview] = useState<fakeOverviewData[]>([]); // State for overview data

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getDataFake(); // Fetch followers data
      const fetchedDataOverview = await getFakeOverviewData(); // Fetch overview data
      setData(fetchedData);
      setDataOverview(fetchedDataOverview);
    }
    fetchData();

    // Set up an interval to refetch data every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="dashboard-container">
      {/* Render the header component, passing the first follower data as props */}
      <Header data={data[0]} />

      <div id="followers-container">
        {data.map((item) => (
          <FollowersCard data={item} borderTheme={item.type} key={item.id} /> // Render the FollowersCard component for each follower data, passing it as props along with the follower's border theme and ID
        ))}
      </div>

      <h2 id="overview">Overview - Today</h2>

      <div id="overview-container">
        {dataOverview.map((item) => (
          <OverviewCard data={item} key={item.id} /> // Render the OverviewCard component for each overview data, passing it as props along with the ID
        ))}
      </div>
    </div>
  );
}
