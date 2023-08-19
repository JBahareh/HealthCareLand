import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Card } from "../atoms/Card";
import { DotShape } from "../atoms/DotShape";

const cardDetails = [
  {
    icon: "/images/searchIco.svg",
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    icon: "/images/medIco.svg",
    title: "Online pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    icon: "/images/resultIco.svg",
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: "/images/chartIco.svg",
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: "/images/emergencyIco.svg",
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    icon: "/images/trackIco.svg",
    title: "Tracking",
    description: "Track and save your medical history and health data ",
  },
];

export const OurServices = () => {
  return (
    <Container maxWidth="xl">
      <Stack>
        <Typography
          sx={{
            fontSize: 36,
            fontFamily: "Mulish",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Our Services
        </Typography>
        <Divider
          sx={{
            background: "black",
            width: 56,
            height: 2,
            mx: "auto",
            my: 4,
          }}
        />
        <Container>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "Mulish",
              fontWeight: 300,
              textAlign: "center",
              color: "#7D7987",
            }}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Typography>
        </Container>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            sx={{ position: "relative" }}
          >
            <Box>
              <img
                src="/images/background.png"
                alt="back"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                zIndex: 2,
                position: "absolute",
                right: -400,
                top: "52%",
              }}
            >
              <DotShape numRows={5} numCols={5} />
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          {cardDetails.map((cardDetail) => {
            return <Card cardDetail={cardDetail} />;
          })}
        </Box>
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
    </Container>
  );
};
