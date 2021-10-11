import React, { useState } from "react";
import Timer from "../Timer";
import { Card, Typography, Grid } from "@mui/material";
import Question from "../Questions";
import { QuizData } from "../../data/quiz";

const Main = () => {
  let [dataIndex, setDataIndex] = useState(0);
  const [answer, setAnswer] = useState(QuizData);
  
  const handlondataIndex = (val)=>{
 if(answer.length > 0)
 {
   alert('game over')
 }
    if(answer.result[dataIndex].correct_answer.toString() === val.toString())
    alert(`Your Answer is correct ${val}`)
    else{
      alert(`Your Answer is incorrect ${val}, Correct Answer is  ${answer.result[dataIndex].correct_answer}`)
    }
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
      <Question data={answer.result[dataIndex]} nextQuestion={handlondataIndex} />
    </Grid>
  );
};

export default Main;
