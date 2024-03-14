import { Wrapper, ServiceWrapper } from "./styles";
import PageTemplate from "../pageTemplate";
// import { useLocation } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../components/Calendar";
import { useLocation } from "react-router-dom";
import { MutableRefObject, useRef, useState } from "react";
import TextComponents from "../../components/TextComponents";
import { Button } from "../../components/Touchables/Buttons";
import { Box, Modal, ModalTypeMap, Typography } from "@mui/material";
import ServiceList from "../../components/Vendor/ServiceList";
import useOnClickOutside from "../../hooks/clickOutside";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Service, Vendor } from "../../types/vendor";
import { Card } from "@mui/joy";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTheme } from "styled-components";

type Props = {};

const BookAVisitPage = (_: Props) => {
  const { state } = useLocation() as {
    state: { vendor: Vendor; service: Service };
  };

  const [appointmentDate, setAppointmentDate] = useState<{
    date: string;
    hour: string;
  }>({ date: "", hour: "" });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef<MutableRefObject<any>>(null);
  useOnClickOutside(ref, () => {
    setIsModalOpen(false);
  });

  const [selectedService, setSelectedService] = useState(state.service);

  const theme = useTheme();

  return (
    <PageTemplate offsetColor={1} offsetTop={2}>
      <Modal
        open={isModalOpen}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ServiceList
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          handleclose={() => {
            return setIsModalOpen(false);
          }}
          services={state.vendor.services}
        />
      </Modal>
      <Wrapper>
        <Calendar
          vendor={state.vendor}
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
      </Wrapper>

      {/* <SelectedService /> */}
      <Typography variant="h6" fontSize={"1rem"} color={theme.colors.accent}>
        Selected Service
      </Typography>
      <ServiceWrapper>
        <Card
          orientation="horizontal"
          size="sm"
          key={selectedService.id}
          variant="outlined"
          sx={{
            cursor: "pointer",
            userSelect: "none",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h6"
            fontSize={".5rem"}
            color={theme.colors.accent}
          >
            {selectedService.title}
          </Typography>
          <Typography
            variant="h6"
            fontSize={".4rem"}
            color={theme.colors.opposite}
          >
            {selectedService.description}
          </Typography>
          <Typography
            variant="h6"
            fontSize={".4rem"}
            color={theme.colors.opposite}
          >
            {selectedService.category}
          </Typography>
          <Typography
            variant="h6"
            fontSize={".4rem"}
            color={theme.colors.opposite}
          >
            {selectedService.discount ? (
              <>
                <s>
                  {selectedService.priceRange.min}pln{" "}
                  {selectedService.priceRange.max &&
                    `- ${selectedService.priceRange.max}pln`}
                </s>
                <TextComponents.Body size={1.2} accent>
                  {" "}
                  {selectedService.discount}pln
                </TextComponents.Body>
              </>
            ) : (
              selectedService.priceRange.min +
              "pln - " +
              selectedService.priceRange.max +
              "pln"
            )}
          </Typography>
          <Typography
            variant="h6"
            fontSize={".4rem"}
            color={theme.colors.opposite}
          >
            {selectedService.durationMin}min
          </Typography>
          <Box sx={{ padding: "0 .4rem" }}>
            <Typography
              variant="h6"
              fontSize={".4rem"}
              color={theme.colors.opposite}
            >
              Includes:{" "}
            </Typography>
            {selectedService.includes.map((include) => {
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

        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Change
        </Button>
      </ServiceWrapper>
      {/*  */}
      <TextComponents.Subtitle accent>
        {JSON.stringify(appointmentDate)}
      </TextComponents.Subtitle>
    </PageTemplate>
  );
};

BookAVisitPage.defaultProps = {
  // bla: 'test',
};

export default BookAVisitPage;
