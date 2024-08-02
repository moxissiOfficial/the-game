/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const BasicButton = ({ onClick, label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button sx={{ mb: "20px" }} variant="outlined" onClick={onClick}>
        {label}
      </Button>
    </Box>
  );
};

export default BasicButton;
