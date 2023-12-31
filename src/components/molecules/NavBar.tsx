import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import { Logo } from "../atoms/Logo";

export const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#FFFFFF",
        boxShadow: "none",
        height: 150,
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: 160 }}
          >
            <Logo />
            <Typography
              sx={{
                color: "#233348",
                fontSize: 24,
                fontWeight: 700,
                fontFamily: "Mulish",
              }}
            >
              Trafalgar
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ width: 545 }}
            justifyContent="space-between"
          >
            <Typography
              sx={{ color: "#1F1534", fontSize: 18, fontFamily: "Mulish" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ color: "#7D7987", fontSize: 18, fontFamily: "Mulish" }}
            >
              Find a doctor
            </Typography>
            <Typography
              sx={{ color: "#7D7987", fontSize: 18, fontFamily: "Mulish" }}
            >
              Apps
            </Typography>
            <Typography
              sx={{ color: "#7D7987", fontSize: 18, fontFamily: "Mulish" }}
            >
              Testimonials
            </Typography>
            <Typography
              sx={{ color: "#7D7987", fontSize: 18, fontFamily: "Mulish" }}
            >
              About us
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
