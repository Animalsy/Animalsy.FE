import { Wrapper } from "./styles";
import PageTemplate from "../pageTemplate";
// import { useLocation } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../components/Calendar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import TextComponents from "../../components/TextComponents";

type Props = {};

const BookAVisitPage = (_: Props) => {
  const { state } = useLocation();
  const [appointmentDate, setAppointmentDate] = useState<{
    date: string;
    hour: string;
  }>({ date: "", hour: "" });

  return (
    <PageTemplate offsetColor={1} offsetTop={2}>
      <Wrapper>
        <Calendar
          vendor={state.vendor}
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
      </Wrapper>
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
