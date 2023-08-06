import { Box, Typography } from "@mui/material";

export const Logo = () => {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        width: 41,
        height: 41,
        background: "#458FF6",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: 26,
          fontWeight: 700,
          width: 17,
          height: 32,
          m: "auto",
          mt: 0.3,
          fontFamily: "Mulish",
        }}
      >
        T
      </Typography>
    </Box>
  );
};
