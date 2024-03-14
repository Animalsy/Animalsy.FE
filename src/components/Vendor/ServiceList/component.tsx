import React, { useRef } from "react";
import { ContentContainer, Wrapper } from "./styles";
import { Service } from "../../../types/vendor";
import useOnClickOutside from "../../../hooks/clickOutside";
import { AiFillCloseCircle, AiOutlineArrowRight } from "react-icons/ai";
import { useTheme } from "styled-components";
import { Box, Typography } from "@mui/material";
import Card from "@mui/joy/Card";
import TextComponents from "../../TextComponents";

type Props = {
  services: Service[];
  handleclose?: () => void;
  selectedService: Service;
  setSelectedService: React.Dispatch<React.SetStateAction<Service>>;
};

const ServiceList = (props: Props) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (props.handleclose) {
      props.handleclose();
    }
  });

  const theme = useTheme();
  return (
    <Wrapper ref={ref}>
      <ContentContainer>
        <AiFillCloseCircle
          onClick={() => {
            props.handleclose && props.handleclose();
          }}
          color={theme.colors.accent}
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: "2rem",
            top: "2rem",
            zIndex: 1000,
          }}
        />
        <div>
          <Box
            sx={{
              scrollBehavior: "smooth",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              py: 1,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              "& > *": {
                scrollSnapAlign: "center",
              },
              "::-webkit-scrollbar": { display: "none" },
              alignItems: "center",
            }}
          >
            {props.services.map((service) => {
              return (
                <Card
                  orientation="horizontal"
                  size="sm"
                  key={service.id}
                  onClick={() => {
                    props.setSelectedService(service);
                    props.handleclose && props.handleclose();
                  }}
                  variant="outlined"
                  sx={{
                    width: "85%",
                    cursor: "pointer",
                    userSelect: "none",
                    flexDirection: "column",
                    backgroundColor:
                      props.selectedService.id === service.id
                        ? theme.colors.primaryLight
                        : "white",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontSize={".5rem"}
                    color={theme.colors.accent}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={".4rem"}
                    color={theme.colors.opposite}
                  >
                    {service.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={".4rem"}
                    color={theme.colors.opposite}
                  >
                    {service.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={".4rem"}
                    color={theme.colors.opposite}
                  >
                    {service.discount ? (
                      <>
                        <s>
                          {service.priceRange.min}pln{" "}
                          {service.priceRange.max &&
                            `- ${service.priceRange.max}pln`}
                        </s>
                        <TextComponents.Body size={1.2} accent>
                          {" "}
                          {service.discount}pln
                        </TextComponents.Body>
                      </>
                    ) : (
                      service.priceRange.min +
                      "pln - " +
                      service.priceRange.max +
                      "pln"
                    )}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={".4rem"}
                    color={theme.colors.opposite}
                  >
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
            })}
          </Box>
        </div>
      </ContentContainer>
    </Wrapper>
  );
};

ServiceList.defaultProps = {
  // bla: 'test',
};

export default ServiceList;
