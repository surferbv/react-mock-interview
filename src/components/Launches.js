import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import LaunchCard from "./LaunchCard";

function Launches() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((launchData) => {
        const launches = [];

        launchData.forEach((launch, index) => {
          launches.push({
            id: index,
            flight_number: launch.flight_number,
            mission_name: launch.mission_name,
            launch_year: launch.launch_year,
            rocket_name: launch.rocket.rocket_name,
            rocket_type: launch.rocket.rocket_type,
            launch_success: launch.launch_success,
            mission_patch_small: launch.links.mission_patch_small,
          });
        });

        setLaunches(launches);
      });
  }, []);


  return (
    <>
      <h1>Launches</h1>
      <h2>API: https://api.spacexdata.com/v3/capsules/past</h2>
      <Stack spacing={2} elevation={0}>
        {launches.map( item => <LaunchCard key={item.id} launch={item} /> )}
      </Stack>
    </>
  );
}

export default Launches;
