import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearColor() {
  return (
   <div className="container">
     <div className="loader">
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="primary" />
        <LinearProgress color="error" />
      </Stack>
    </div>
   </div>
  );
}
