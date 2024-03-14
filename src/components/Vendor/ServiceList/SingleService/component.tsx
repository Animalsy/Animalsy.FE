import React from "react";
import { Service } from "../../../../types/vendor";
import { Card } from "@mui/joy";
import { Box, Typography } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTheme } from "styled-components";

type Props = {
  service: Service;
  handleclose?: () => void;
  selectedService?: Service;
  setSelectedService?: React.Dispatch<React.SetStateAction<Service>>;
  onclick?: () => void;
};

const SingleService = ({
  service,
  handleclose,
  selectedService,
  setSelectedService,
  onclick,
}: Props) => {
  const theme = useTheme();

  return (
    <Card
      orientation="horizontal"
      size="sm"
      key={service.id}
      onClick={() => {
        setSelectedService && setSelectedService(service);
        handleclose && handleclose();
        onclick && onclick();
      }}
      variant="outlined"
      sx={{
        width: "85%",
        cursor: "pointer",
        userSelect: "none",
        flexDirection: "column",
        backgroundColor:
          selectedService?.id === service.id
            ? theme.colors.primaryLight
            : "white",
      }}
    >
      <Typography variant="h6" fontSize={".5rem"} color={theme.colors.accent}>
        {service.title}
      </Typography>
      <Typography variant="h6" fontSize={".4rem"} color={theme.colors.opposite}>
        {service.description}
      </Typography>
      <Typography variant="h6" fontSize={".4rem"} color={theme.colors.opposite}>
        {service.category}
      </Typography>
      {service.discount ? (
        <Typography
          variant="h6"
          fontSize={".6rem"}
          color={theme.colors.accent}
          style={{ textAlign: "center" }}
        >
          <s>
            {service.priceRange.min}pln{" "}
            {service.priceRange.max && `- ${service.priceRange.max}pln`}
          </s>{" "}
          {service.discount}pln
        </Typography>
      ) : (
        <Typography
          variant="h6"
          fontSize={".6rem"}
          color={theme.colors.accent}
          style={{ textAlign: "center" }}
        >
          {service.priceRange.min + "pln - " + service.priceRange.max + "pln"}
        </Typography>
      )}
      <Typography variant="h6" fontSize={".4rem"} color={theme.colors.opposite}>
        {service.durationMin}min
      </Typography>
      <Box sx={{ padding: "0 .4rem" }}>
        <Typography
          variant="h6"
          fontSize={".4rem"}
          color={theme.colors.opposite}
        >
          Includes:{" "}
        </Typography>
        {service.includes.map((include) => {
          return (
            <Typography
              variant="h6"
              fontSize={".4rem"}
              color={theme.colors.opposite}
            >
              <AiOutlineArrowRight /> {include}
            </Typography>
          );
        })}
      </Box>
    </Card>
  );
};

SingleService.defaultProps = {
  // bla: 'test',
};

export default SingleService;
