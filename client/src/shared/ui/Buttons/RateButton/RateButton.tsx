import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import React from "react";

type RateButtonProps = {
  rating?: number;
  rateHandler: (rating: number) => void;
};

const RateButton: React.FC<RateButtonProps> = ({ rating }) => {
  return (
    <Rating
      defaultValue={0}
      onChange={() => {
   
      }}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
  );
};

export default RateButton;
