import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Box,
  Checkbox,
  Radio,
  Button,
} from "@mui/material";

const Question = ({
  data: { question, category, correct_answer, incorrect_answer, file, type },
  nextQuestion,
}) => {
  const handleonNextQuestion = () => {
    nextQuestion();
  };
  const renderQuestions = () => {
    return (
      <Typography gutterBottom variant="h6" component="div">
        {question}
      </Typography>
    );
  };
  const renderCategory = () => {
    return (
      <>
        {type === "Mcq"
          ? correct_answer.map((ind) => {
              return (
                <>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Checkbox /> {ind}
                  </Typography>
                </>
              );
            })
          : correct_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Radio /> {ind}
                </Typography>
              );
            })}

        {type === "Mcq"
          ? incorrect_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Checkbox /> {ind}
                </Typography>
              );
            })
          : incorrect_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Radio /> {ind}
                </Typography>
              );
            })}
        <Button onClick={(e) => handleonNextQuestion()}>Next</Button>
      </>
    );
  };
  const renderImg = () => {
    return (
      <>
        <img src={file} alt="imgQuestion" />
        {type === "Mcq"
          ? correct_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Checkbox /> {ind}
                </Typography>
              );
            })
          : correct_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Radio /> {ind}
                </Typography>
              );
            })}

        {type === "Mcq"
          ? incorrect_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Checkbox /> {ind}
                </Typography>
              );
            })
          : incorrect_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Radio /> {ind}
                </Typography>
              );
            })}
        <Button onClick={(e) => handleonNextQuestion()}>Next</Button>
      </>
    );
  };
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {category === "Text" ? (
          <>
            <CardContent sx={{ flex: "1 0 auto" }}>
              {renderQuestions()}

              {renderCategory()}
            </CardContent>
          </>
        ) : (
          <>
            {renderQuestions()}
            {renderImg()}
          </>
        )}
      </Box>
    </Card>
  );
};

export default Question;
