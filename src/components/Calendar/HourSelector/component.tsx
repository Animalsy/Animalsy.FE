import { useEffect, useRef, useState } from "react";
import { Wrapper } from "./styles";
import { OpenHours } from "../../../types/vendor";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { useTheme } from "styled-components";
type Props = {
  openHours: OpenHours;
  appointmentDate: {
    date: string;
    hour: string;
  };
  setAppointmentDate: React.Dispatch<
    React.SetStateAction<{
      date: string;
      hour: string;
    }>
  >;
};

const HourSelector = (props: Props) => {
  const openHours = props.openHours;

  const boxRef = useRef<HTMLDivElement>(null);
  const [arrayOpenHours, setArrayOpenHours] = useState<string[]>([]);

  function getHoursBetweenOpenAndClose(
    openTime: string | undefined,
    closeTime: string | undefined
  ) {
    // Parse the open and close times

    if (!openTime || !closeTime) return [];
    const [openHour, openMinute] = openTime.split(":").map(Number);
    const [closeHour, closeMinute] = closeTime.split(":").map(Number);

    // Initialize the interval step (30 minutes)
    const interval = 30;

    // Create an array to store the resulting time intervals
    const timeIntervals = [];

    // Loop through the time intervals
    let currentHour = openHour;
    let currentMinute = openMinute;
    while (
      currentHour < closeHour ||
      (currentHour === closeHour && currentMinute <= closeMinute)
    ) {
      timeIntervals.push(
        `${currentHour.toString().padStart(2, "0")}:${currentMinute
          .toString()
          .padStart(2, "0")}`
      );
      currentMinute += interval;
      if (currentMinute >= 60) {
        currentHour++;
        currentMinute %= 60;
      }
    }

    return timeIntervals;
  }

  useEffect(() => {
    setArrayOpenHours(
      getHoursBetweenOpenAndClose(openHours.open, openHours.close)
    );
  }, [openHours]);

  const [selectedHour, setSelectedHour] = useState<string>();

  useEffect(() => {
    if (selectedHour)
      props.setAppointmentDate({
        ...props.appointmentDate,
        hour: selectedHour,
      });
  }, [selectedHour]);

  useEffect(() => {
    setSelectedHour(undefined);
  }, [props.appointmentDate.date]);
  const theme = useTheme();
  return (
    <>
      <Wrapper>
        <Box
          ref={boxRef}
          sx={{
            scrollBehavior: "smooth",
            display: "flex",
            gap: 1,
            py: 1,
            overflow: "auto",
            scrollSnapType: "x mandatory",
            "& > *": {
              scrollSnapAlign: "center",
            },
            "::-webkit-scrollbar": { display: "none" },
            padding: "1rem",
            alignItems: "center",
            background: "transparent",
          }}
        >
          {arrayOpenHours.map((hour, index) => (
            <Card
              orientation="horizontal"
              onClick={() => setSelectedHour(hour)}
              size="sm"
              key={index + hour}
              variant="outlined"
              sx={{
                userSelect: "none",
                cursor: "pointer",
                backgroundColor:
                  selectedHour === hour
                    ? theme.colors.accent
                    : theme.colors.primaryDark400,
              }}
            >
              <Typography>{hour}</Typography>
            </Card>
          ))}
        </Box>
      </Wrapper>
    </>
  );
};

HourSelector.defaultProps = {
  // bla: 'test',
};

export default HourSelector;
