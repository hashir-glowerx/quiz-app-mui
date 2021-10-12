import React, { useState } from "react";
import Timer from "../Timer";
import { Card, Typography, Grid } from "@mui/material";
import Question from "../Questions";
import { QuizData } from "../../data/quiz";
import EndGame from '../EndGame/index'
const Main = () => {
  let [dataIndex, setDataIndex] = useState(0);
  const [answer, setAnswer] = useState(QuizData);
  const [score, setScore] = useState(0);
  
  const handlondataIndex = (val)=>{

    if(answer.result[dataIndex].correct_answer.toString() === val.toString())
    setScore(score+1);
    
    setDataIndex(dataIndex+1)
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
      {dataIndex<answer.result.length?(<Question data={answer.result[dataIndex]} nextQuestion={handlondataIndex} />):(<EndGame result={score}/>)}
      
    </Grid>
  );
};

export default Main;
