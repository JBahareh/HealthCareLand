import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { DotShape } from "../atoms/DotShape";

export const ReviewSection = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          background:
            "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)",
          borderRadius: "24px",
          textAlign: "center",
          p: "100px",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", right: -270, top: 15 }}>
          <DotShape numRows={4} numCols={3} />
        </Box>
        <Box sx={{ position: "absolute", left: -80, bottom: 15 }}>
          <DotShape numRows={5} numCols={2} />
        </Box>
        <Typography
          sx={{
            fontSize: 36,
            fontFamily: "Mulish",
            fontWeight: 700,
            color: "white",
          }}
        >
          What our customer are saying
        </Typography>
        <Divider
          sx={{
            background: "white",
            width: 56,
            height: 2,
            mx: "auto",
            my: 4,
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-around"
          width="100%"
          alignItems="center"
          mt={10}
        >
          <Stack direction="row" alignItems="center" width="40%" spacing={4}>
            <Box>
              <img
                src="/images/avatar.png"
                alt="avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Stack textAlign="left" spacing={1}>
              <Typography
                sx={{
                  fontSize: 22,
                  fontFamily: "Mulish",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Edward Newgate
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontFamily: "Mulish",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Founder Circle
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              fontSize: 19,
              fontFamily: "Mulish",
              fontWeight: 400,
              color: "white",
              textAlign: "left",
              width: "45%",
            }}
          >
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};
