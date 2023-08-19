import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { DotShape } from "../atoms/DotShape";

export const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: 150 }} />
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack spacing={5} width="35%" sx={{ justifyContent: "center", pr: 5 }}>
          <Box sx={{ position: "absolute", left: 0, top: 150 }}>
            <DotShape numRows={5} numCols={3} />
          </Box>
          <Typography
            sx={{
              fontSize: 50,
              fontFamily: "Mulish",
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            Virtual healthcare for you
          </Typography>
          <Typography
            sx={{
              fontSize: 21,
              fontFamily: "Mulish",
              fontWeight: 300,
              letterSpacing: 1,
              lineHeight: 2,
              color: "#7D7987",
            }}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: 20,
              fontFamily: "Mulish",
              fontWeight: 700,
              background: "#458FF6",
              borderRadius: "55px",
              p: "15px 50px",
              textTransform: "none",
              boxShadow: "none",
              my: 4,
              width: "fit-content",
            }}
          >
            Consult today
          </Button>
        </Stack>
        <Box width="50%">
          <img
            src="/images/illustration.png"
            alt="home page"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
    </Container>
  );
};
