import React, { useRef } from "react";
import { ContentContainer, Wrapper } from "./styles";
import { Service } from "../../../types/vendor";
import useOnClickOutside from "../../../hooks/clickOutside";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTheme } from "styled-components";
import { Box } from "@mui/material";
import SingleService from "./SingleService";

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
                <SingleService
                  key={service.id}
                  service={service}
                  handleclose={props.handleclose}
                  selectedService={props.selectedService}
                  setSelectedService={props.setSelectedService}
                />
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
