import { Wrapper, ServiceWrapper } from "./styles";
import PageTemplate from "../pageTemplate";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../components/Calendar";
import { useLocation } from "react-router-dom";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Button } from "../../components/Touchables/Buttons";
import { Modal, Typography } from "@mui/material";
import ServiceList from "../../components/Vendor/ServiceList";
import useOnClickOutside from "../../hooks/clickOutside";
import { Service, Vendor } from "../../types/vendor";
import { useTheme } from "styled-components";
import PetSelector from "../../components/PetSelector";
import SingleService from "../../components/Vendor/ServiceList/SingleService";
import { PetData } from "../../redux/Profile/thunks/types/pet.types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getProfile } from "../../redux/Profile/thunks/profile/GetProfile.thunk";

type Props = {};

const BookAVisitPage = (_: Props) => {
  const { state } = useLocation() as {
    state: { vendor: Vendor; service: Service };
  };

  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.profile);
  useEffect(() => {
    if (!profile) {
      //redirect to profile page
      dispatch(getProfile());
    }
  }, [profile]);
  const [selectedPet, setSelectedPet] = useState<PetData>();
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

  function bookAvisti({}: {
    selectedPet: PetData | undefined;
    selectedService: Service;
    appointmentDate: { date: string; hour: string };
  }) {
    if (!selectedPet) return alert("Please select a pet");
    if (!selectedService) return alert("Please select a service");
    if (!appointmentDate.date || !appointmentDate.hour)
      return alert("Please select a date and time");
    console.log({ selectedPet, selectedService, appointmentDate });
  }

  return (
    <PageTemplate offsetColor={1} offsetTop={2}>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
          <SingleService
            service={selectedService}
            onclick={() => {
              setIsModalOpen(true);
            }}
          />

          <Button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Change
          </Button>
        </ServiceWrapper>
        <PetSelector
          selectedPet={selectedPet}
          setSelectedPet={setSelectedPet}
        />
        <p>
          {!selectedPet ||
          !selectedService ||
          !appointmentDate.date ||
          !appointmentDate.hour
            ? "true"
            : "false"}
        </p>
        <Button
          disabled={
            !selectedPet ||
            !selectedService ||
            !appointmentDate.date ||
            !appointmentDate.hour
          }
          style={{ alignSelf: "center" }}
          onClick={() => {
            bookAvisti({ selectedPet, selectedService, appointmentDate });
          }}
        >
          Book a visit
        </Button>
      </div>
    </PageTemplate>
  );
};

BookAVisitPage.defaultProps = {
  // bla: 'test',
};

export default BookAVisitPage;
