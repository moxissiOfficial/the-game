/* eslint-disable react/prop-types */
import GameButton from "./GameButton";
import Box from "@mui/system/Box";

import rock from "./assets/img/rock.png";
import scissors from "./assets/img/scissors.png";
import paper from "./assets/img/paper.png";
import Score from "./Score";

const Container = ({ scorePlayer, scoreComputer, choseOption, winPlayer, winComputer }) => {
  const options = [
    { option: "Rock", img: rock },
    { option: "Paper", img: paper },
    { option: "Scissors", img: scissors },
  ];
  return (
    <Box sx={{ textAlign: "center" }}>
      <Score variant1={winPlayer} variant2={winComputer} scorePlayer={scorePlayer} scoreComputer={scoreComputer} />

      {options.map((option, index) => (
        <GameButton key={index} imageSrc={option.img} onClick={() => choseOption(option.option)}></GameButton>
      ))}
    </Box>
  );
};

export default Container;
