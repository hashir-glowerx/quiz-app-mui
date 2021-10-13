import React from "react";
const Timer = (props) => {

  // const [sec, setSec] = React.useState(60);
  // const [minutes, setMinutes] = React.useState(props.minut);

  React.useEffect(() => {
    const timer = setInterval(() => {
      // setSec((prevsec) => (prevsec <= 0 ? 60 : prevsec - 1));
      // if(sec===0)
      // {setMinutes((prevminutes) => (prevminutes <= 0 ? minutes : prevminutes - 1));}
      props.handleTime();
    }, 800);
  
    return () => {
      clearInterval(timer);
    };
  }, [props.sec]);

  return props.minutes>0||props.sec<0 ?(
    <h3>
     0{props.minutes} : {props.sec<10?"0"+props.sec:props.sec}
    </h3>
  ):(<h1>Time Out</h1>)
};

export default Timer;
