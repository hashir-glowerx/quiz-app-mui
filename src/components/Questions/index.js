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
  const [selectedValue, setSelectedValue] = React.useState([]);
  const handleonNextQuestion = () => {
    console.log(selectedValue);
    nextQuestion(selectedValue);
    setSelectedValue([]);
  };
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleChangeCheckBox = (e) => {
    let data = selectedValue;
    data.push(e.target.value);
    setSelectedValue(data);
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
        {type === "Checkbox"
          ? correct_answer.map((ind) => {
              return (
                <>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Checkbox value={ind} onChange={handleChangeCheckBox} />{" "}
                    {ind}
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
                  <Radio
                    checked={selectedValue === ind}
                    onChange={handleChange}
                    value={ind}
                  />{" "}
                  {ind}
                </Typography>
              );
            })}

        {type === "Checkbox"
          ? incorrect_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Checkbox value={ind} onChange={handleChangeCheckBox} /> {ind}
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
                  <Radio
                    checked={selectedValue === ind}
                    onChange={handleChange}
                    value={ind}
                  />{" "}
                  {ind}
                </Typography>
              );
            })}
        <Button variant="contained" onClick={(e) => handleonNextQuestion()}>
          Next
        </Button>
      </>
    );
  };
  const renderImg = () => {
    return (
      <>
        <img src={file} alt="imgQuestion" />
        {type === "Checkbox"
          ? correct_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Checkbox name={ind} onChange={handleChangeCheckBox} /> {ind}
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
                  <Radio
                    checked={selectedValue === ind}
                    onChange={handleChange}
                    value={ind}
                  />{" "}
                  {ind}
                </Typography>
              );
            })}

        {type === "Checkbox"
          ? incorrect_answer.map((ind) => {
              return (
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <Checkbox name={ind} onChange={handleChangeCheckBox} /> {ind}
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
                  <Radio
                    checked={selectedValue === ind}
                    onChange={handleChange}
                    value={ind}
                  />{" "}
                  {ind}
                </Typography>
              );
            })}
        <Button variant="contained" onClick={(e) => handleonNextQuestion()}>
          Next
        </Button>
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
