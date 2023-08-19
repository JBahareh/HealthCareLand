import { Box, Container, Divider, Stack, Typography } from "@mui/material";

export const ReviewSection = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          background:
            "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)",
          borderRadius: "24px",
        }}
      >
        <Typography>What our customer are saying</Typography>
        <Divider
          sx={{
            background: "white",
            width: 56,
            height: 2,
            mx: "auto",
            my: 4,
          }}
        />
        <Stack>
          <Typography>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </Typography>
          <Stack>
            <Box></Box>
            <Stack>
              <Typography>Edward Newgate</Typography>
              <Typography>Founder Circle</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
