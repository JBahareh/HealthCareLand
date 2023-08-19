import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface CardProps {
  cardDetail: {
    icon: string;
    title: string;
    description: string;
  };
}

export const Card: FC<CardProps> = ({ cardDetail }) => {
  return (
    <Stack
      sx={{
        background: "white",
        borderRadius: "20px",
        width: 310,
        height: 324,
        boxShadow: "10px 40px 50px 0px #E5E9F666",
        backgroundColor: "white",
        p: "40px",
        zIndex: 2,
      }}
      justifyContent="space-around"
    >
      <Box sx={{ width: "50%", mr: "auto", height: 95 }}>
        <img
          src={cardDetail.icon}
          alt="icon"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: 24,
          fontFamily: "Mulish",
          fontWeight: 700,
        }}
      >
        {cardDetail.title}
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          fontFamily: "Mulish",
          fontWeight: 300,
          color: "#7D7987",
        }}
      >
        {cardDetail.description}
      </Typography>
    </Stack>
  );
};
