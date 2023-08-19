import { Box, Grid } from "@mui/material";
import { FC } from "react";

export const DotShape: FC<{ numRows: number; numCols: number }> = ({
  numRows,
  numCols,
}) => {
  const generateBoxes = () => {
    const boxes = [];
    for (let row = 0; row < numRows; row++) {
      const rowBoxes = [];
      for (let col = 0; col < numCols; col++) {
        rowBoxes.push(
          <Grid item key={row * numCols + col}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#DFEDFD",
              }}
            />
          </Grid>
        );
      }
      boxes.push(
        <Grid container spacing={2.5} key={row}>
          {rowBoxes}
        </Grid>
      );
    }
    return boxes;
  };

  return (
    <Box sx={{ px: 2 }}>
      <Grid container gap={2}>
        {generateBoxes()}
      </Grid>
    </Box>
  );
};
