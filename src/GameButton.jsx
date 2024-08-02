import Button from "@mui/material/Button";
/* eslint-disable react/prop-types */

const GameButton = ({ onClick, imageSrc }) => {
  return (
    <Button
      sx={{
        mb: "20px",
        backgroundImage: `url(${imageSrc})`,
        width: "200px",
        height: "200px",
        position: "relative",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "10px",
        color: "#d7d7d7",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      onClick={onClick}
    ></Button>
  );
};

export default GameButton;
