/* eslint-disable react/prop-types */
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Score = ({ variant1, variant2, scorePlayer, scoreComputer }) => {
  const players = [
    { score: scorePlayer, variant: variant1 },
    { score: scoreComputer, variant: variant2 },
  ];

  return (
    <Stack sx={{ justifyContent: "center", textSize: "30px", mt: "10px", mb: "20px" }} direction="row" spacing={40}>
      {players.map((player, index) => (
        <Chip
          key={index}
          label={player.score}
          variant={player.variant}
          sx={{ fontSize: 55, paddingTop: "40px", paddingBottom: "40px", paddingLeft: "10px", paddingRight: "10px" }}
        />
      ))}
    </Stack>
  );
};

export default Score;
