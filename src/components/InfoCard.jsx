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

const InfoCard = ({ setDrawerOpen, setShowCard }) => {
  const handleClick = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setShowCard(false);
  };

  return (
    <>
      <StyledCard>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
          title="Feral Goats"
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Feral goats can quickly destroy all vegetation within their reach,
            threatening native plants and damaging the forest understorey.
          </Typography>
          <Typography variant="body2">
            Goats were introduced to New Zealand in the early days of European
            settlement for food, to establish a commercial fibre industry, and
            for weed control on developing land. The descendents of those that
            escaped or were deliberately released thrived in the country’s grass
            hills, forest and scrubland areas. Today feral goats (Capra hircus)
            occur on both main islands and a few offshore islands. Feral goats
            are classifed as wild animals under the Wild Animal Control Act
            1977.
          </Typography>
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
