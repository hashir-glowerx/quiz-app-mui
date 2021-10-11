import React, { useState } from "react";
import Timer from "../Timer";
import { Card, Typography, Grid } from "@mui/material";
import Question from "../Questions";
import { QuizData } from "../../data/quiz";

const Main = () => {
  let [dataIndex, setDataIndex] = useState(0);

  const handlondataIndex = ()=>{
    setDataIndex(dataIndex++)
  }
  return (
    <Grid
      item={true}
      id="main-container"
      xs={12}
      sm={10}
      lg={10}
      style={{ margin: "0 auto" }}
    >
      <Card className="card-full-width">
        <Timer />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          Attempt Quiz Page
        </Typography>
      </Card>
      <Question data={QuizData.result[dataIndex]} nextQuestion={handlondataIndex} />
    </Grid>
  );
};

export default Main;
