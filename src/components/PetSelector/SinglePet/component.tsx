import React from "react";
import { Card } from "@mui/joy";
import { CSSProperties, useTheme } from "styled-components";
import { Typography } from "@mui/material";
import { PetData } from "../../../redux/Profile/thunks/types/pet.types";
import { squareLogo } from "../../../assets/logo";

type Props = {
  pet: PetData;
  selectedPet: PetData | undefined;
  setSelectedPet: React.Dispatch<React.SetStateAction<PetData | undefined>>;
};

const SinglePet = ({ pet, selectedPet, setSelectedPet }: Props) => {
  const theme = useTheme();

  // fetch image for pet from https://dog.ceo/api/breeds/image/random

  const textStyle: CSSProperties = {
    padding: "0 0.1rem",
  };
  return (
    <Card
      onClick={() => {
        setSelectedPet(pet);
      }}
      orientation="horizontal"
      size="sm"
      variant="outlined"
      sx={{
        cursor: "pointer",
        userSelect: "none",
        flexDirection: "column",
        minWidth: "5rem",
        padding: ".1rem",
        paddingBottom: ".5rem",
        backgroundColor:
          pet?.id === selectedPet?.id ? theme.colors.primaryLight : "white",
      }}
    >
      <img
        src={pet.imageUrl ? pet.imageUrl : squareLogo}
        alt={pet.name}
        style={{
          width: "100%",
          aspectRatio: 1,
          objectFit: "cover",
          borderRadius: ".1rem",
        }}
      />
      <Typography
        variant="h6"
        fontSize={".5rem"}
        color={theme.colors.accent}
        style={textStyle}
      >
        {pet.name.toUpperCase()}
      </Typography>
      <Typography
        variant="h6"
        fontSize={".4rem"}
        color={theme.colors.accent}
        style={textStyle}
      >
        {new Date(pet.dateOfBirth).toLocaleDateString()}
      </Typography>
      <Typography
        variant="h6"
        fontSize={".4rem"}
        color={theme.colors.opposite}
        style={textStyle}
      >
        {pet.species}
      </Typography>
      <Typography
        variant="h6"
        fontSize={".4rem"}
        color={theme.colors.opposite}
        style={textStyle}
      >
        {pet.race}
      </Typography>
    </Card>
  );
};

SinglePet.defaultProps = {
  // bla: 'test',
};

export default SinglePet;
