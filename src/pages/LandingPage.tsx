import { Box } from "@mui/material";
import { NavBar } from "../components/molecules/NavBar";
import { HomePage } from "../components/organisms/HomePage";
import { OurServices } from "../components/organisms/OurServices";
import { OurPurpose } from "../components/organisms/OurPurpose";
import { DownloadApp } from "../components/organisms/DownloadApp";
import { ReviewSection } from "../components/organisms/ReviewSection";

export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <Box sx={{ height: 150 }} />
      <OurServices />
      <Box sx={{ height: 150 }} />
      <OurPurpose />
      <Box sx={{ height: 250 }} />
      <DownloadApp />
      <Box sx={{ height: 300 }} />
      <ReviewSection />
    </>
  );
};
