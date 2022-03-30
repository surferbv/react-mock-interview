import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Alert } from "@mui/material";

function LaunchCard(props) {
  
    const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  }));

  const launched = props.launch.launch_success;
  
  console.log(props.launch.mission_name);
  console.log(launched);
  

  return (
    <Card>
      <Stack direction="row" spacing={2}>
        <Item>
          <CardMedia
            component="img"
            width={256}
            height={256}
            image={props.launch.mission_patch_small}
            alt={props.launch.mission_patch_small}
          />
        </Item>
        <Item>
          <CardContent>
          <Typography color="text.primary" gutterBottom> Flight ID: {props.launch.id}</Typography>
          <Typography color="text.primary" gutterBottom> Flight Number: {props.launch.flight_number} </Typography>
          <Typography color="text.primary" gutterBottom> Mission Name: {props.launch.mission_name} </Typography>
          <Typography color="text.primary" gutterBottom> Rocket Name: {props.launch.rocket_name} </Typography>
          <Typography color="text.primary" gutterBottom> Rocekt Type: {props.launch.rocket_type}</Typography>
            { launched
            ? <Alert severity="success" >Launch Success!</Alert>
            : <Alert severity="error" >Launch Failure!</Alert>}
          </CardContent>
        </Item>
      </Stack>
    </Card>
  );
}

export default LaunchCard;
