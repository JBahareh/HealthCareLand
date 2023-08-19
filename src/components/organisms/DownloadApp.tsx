import SouthIcon from "@mui/icons-material/South";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export const DownloadApp = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" justifyContent="right" spacing={20} width="100%">
        <Stack spacing={5} width="25%" sx={{ justifyContent: "center", ml: 5 }}>
          <Typography
            sx={{
              fontSize: 36,
              fontFamily: "Mulish",
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            Download our mobile apps
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
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
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
            endIcon={<SouthIcon />}
          >
            Download
          </Button>
        </Stack>
        <Box width="50%">
          <img
            src="/images/illustrationThird.png"
            alt="home page"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
    </Container>
  );
};
