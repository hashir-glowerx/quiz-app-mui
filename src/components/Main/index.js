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
  const [sec, setSec] = React.useState(60);
  const [minutes, setMinutes] = React.useState(answer.maxTime);

  const handleChangeOnTime = ()=>{
    setSec((prevsec) => (prevsec <= 0 ? 60 : prevsec - 1));
    if(sec===0)
    {setMinutes((prevminutes) => (prevminutes <= 0 ? minutes : prevminutes - 1));}
  }

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
        <Timer minutes={minutes} sec={sec} handleTime={handleChangeOnTime}/>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          Attempt Quiz Page
        </Typography>
      </Card>
      {minutes>0||sec<0 ?<>{dataIndex<answer.result.length?(<Question data={answer.result[dataIndex]} nextQuestion={handlondataIndex} />):(<EndGame result={score}/>)}</>:(<EndGame result={score}/>)}
     
    </Grid>
  );
};

export default Main;
