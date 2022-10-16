import React from "react";
import {
  Card,
  CardContent,
  styled,
  Typography,
  CardActions,
  Button,
  CardHeader,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { infoCardData } from "../data/infoCardData";

const StyledCard = styled(Card)({
  position: "absolute",
  top: "80px",
  right: "30px",
  width: "25vw",
  height: "80vh",
  zIndex: 1000,
  backgroundColor: "rgba(0,0,0,0.25)",
  color: "white",
});

const InfoCard = ({ setDrawerOpen, setShowCard, currentPest }) => {
  const handleClick = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setShowCard(false);
  };

  const info = infoCardData.find((infoItem) => infoItem.id === currentPest);

  return (
    <>
      <StyledCard>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
          title={info.name}
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {info.subHeading}
          </Typography>
          <Typography variant="body2">{info.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            View Data
          </Button>
        </CardActions>
      </StyledCard>
    </>
  );
};

export default InfoCard;
