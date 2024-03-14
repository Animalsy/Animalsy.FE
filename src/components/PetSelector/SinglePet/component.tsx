import React, { useEffect, useState } from "react";
import { Pet } from "../../../types/vendor";
import { Card } from "@mui/joy";
import { CSSProperties, useTheme } from "styled-components";
import { Typography } from "@mui/material";

type Props = {
  pet: Pet;
  selectedPet: Pet | undefined;
  setSelectedPet: React.Dispatch<React.SetStateAction<Pet | undefined>>;
};

const SinglePet = ({ pet, selectedPet, setSelectedPet }: Props) => {
  const theme = useTheme();

  // fetch image for pet from https://dog.ceo/api/breeds/image/random
  const image = async () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => data.message);
  };

  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(() => {
    image().then((url) => setImageUrl(url));
  }, []);

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
        src={imageUrl}
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
        {pet.dateOfBirth}
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
        {pet.breed}
      </Typography>
    </Card>
  );
};

SinglePet.defaultProps = {
  // bla: 'test',
};

export default SinglePet;
