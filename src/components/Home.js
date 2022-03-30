import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Link from '@mui/material/Link';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <div>
      <h1>SpaceX API</h1>
      <Stack spacing={2}>
        <Item>
        <Link href="/Launches">Launches</Link>
        </Item>
        <Item>
        <Link href="/launch_pad">Lanunch Pads</Link>  
        </Item>
        <Item>
        <Link href="/missions">Missions</Link></Item>
      </Stack>
    </div>
  );
}
