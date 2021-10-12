import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
const ShowScore = (props) => {
  return (
    <Card sx={{ display: "flex" }} >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography  variant="h5" >
            Final Result : {props.result}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ShowScore;
