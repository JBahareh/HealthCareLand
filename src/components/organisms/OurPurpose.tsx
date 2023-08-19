import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { DotShape } from "../atoms/DotShape";

export const OurPurpose = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        sx={{ position: "relative", overflow: "hidden" }}
      >
        <Box width="50%">
          <img
            src="/images/illustrationSecond.png"
            alt="home page"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Stack spacing={5} width="35%" sx={{ justifyContent: "center", pr: 5 }}>
          <Typography
            sx={{
              fontSize: 36,
              fontFamily: "Mulish",
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            Leading healthcare providers
          </Typography>
          <Divider
            sx={{
              background: "black",
              width: 60,
              height: 2,
              mr: "auto",
              my: 3,
            }}
          />
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "Mulish",
              fontWeight: 300,
              lineHeight: 2,
              color: "#7D7987",
            }}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: 20,
              fontFamily: "Mulish",
              fontWeight: 700,
              color: "#458FF6",
              textTransform: "none",
              border: "2px solid #458FF6",
              borderRadius: "55px",
              p: "13px 55px",
              width: "fit-content",
              mx: "auto",
              my: 4,
            }}
          >
            Learn more
          </Button>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            right: -860,
            bottom: -150,
          }}
        >
          <DotShape numRows={5} numCols={5} />
        </Box>
      </Stack>
    </Container>
  );
};
