import { useState, useEffect, useRef } from "react";
import { Wrapper } from "./styles";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { useTheme } from "styled-components";
import { Button } from "@mui/base";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { OpenHours, Vendor } from "../../types/vendor";
import { fullyBooked } from "../../assets/logo";
import HourSelector from "./HourSelector";

interface Props {
  //
  vendor: Vendor;
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
}
const Calendar = (props: Props) => {
  const [currentWeek, setCurrentWeek] = useState<string[]>([]);
  const [previousWeek, setPreviousWeek] = useState<string[]>([]);
  const [nextWeek, setNextWeek] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [centerDate, setCenterDate] = useState<Date>(new Date());
  const [cangoBack, setCangoBack] = useState(false);
  const [rnd, setrnd] = useState(0);

  const checkIfDateIsFromPast = (date: string) => {
    const formatedStr = formatDate(date);
    const currentDate = new Date();
    const selectedDateObj = new Date(formatedStr);

    return selectedDateObj < currentDate;
  };

  useEffect(() => {
    if (previousWeek[0]) {
      const r = checkIfDateIsFromPast(previousWeek[0]);
      if (r) {
        setCangoBack(false);
      }
    }
  }, [previousWeek, rnd]);

  useEffect(() => {
    const currentDate = centerDate;
    const currentDay = currentDate.getDay();
    const daysInWeek = 7;

    // Calculate the start date of the current week
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDay
    );

    // Generate the dates for the current week
    const weekDates = Array.from({ length: daysInWeek }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      return date.toLocaleDateString();
    }).filter((date) => {
      const formatedStr = formatDate(date);
      const currentDate = new Date();
      const selectedDateObj = new Date(formatedStr);

      return selectedDateObj >= currentDate;
    });

    // Calculate the start date of the previous week
    const prevWeekStartDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() - daysInWeek
    );

    // Generate the dates for the previous week
    const prevWeekDates = Array.from({ length: daysInWeek }, (_, index) => {
      const date = new Date(prevWeekStartDate);
      date.setDate(prevWeekStartDate.getDate() + index);
      return date.toLocaleDateString();
    }).filter((date) => {
      const formatedStr = formatDate(date);
      const currentDate = new Date();
      const selectedDateObj = new Date(formatedStr);

      return selectedDateObj >= currentDate;
    });
    // Calculate the start date of the next week
    const nextWeekStartDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + daysInWeek
    );

    // Generate the dates for the next week
    const nextWeekDates = Array.from({ length: daysInWeek }, (_, index) => {
      const date = new Date(nextWeekStartDate);
      date.setDate(nextWeekStartDate.getDate() + index);
      return date.toLocaleDateString();
    });

    setNextWeek(nextWeekDates);

    setPreviousWeek(prevWeekDates);

    setCurrentWeek(weekDates);
  }, [centerDate]);

  const boxRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    setrnd(Math.random());

    if (boxRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = boxRef.current;
      // alert(`${scrollLeft + offsetWidth} scrollWidth: ${scrollWidth}`);
      if (scrollLeft + offsetWidth + 50 < scrollWidth) {
        boxRef.current.scrollLeft += offsetWidth;
        setCangoBack(true);
      } else {
        setCenterDate(new Date(centerDate.getTime() + 7 * 24 * 60 * 60 * 1000));

        boxRef.current.scrollLeft += offsetWidth;
      }
    }
  };

  const scrollPrevious = () => {
    setrnd(Math.random());
    const stringdate = formatDate(previousWeek[0]);
    const date = new Date(stringdate);
    if (boxRef.current) {
      const { scrollLeft, offsetWidth } = boxRef.current;
      if (scrollLeft >= 50) {
        boxRef.current.scrollLeft -= offsetWidth;
        setCangoBack(true);
      } else {
        if (date > new Date()) {
          setCenterDate(
            new Date(centerDate.getTime() - 7 * 24 * 60 * 60 * 1000)
          );
          boxRef.current.scrollLeft -= offsetWidth;
        }
      }
    }
  };

  const formatDate = (dateString: string): string => {
    const spl = dateString.split("/");
    const datestr = `${spl[1]}/${spl[0]}/${spl[2]}`;
    return datestr;
  };

  const getDayName = (dateString: string): string => {
    const datestr = formatDate(dateString);
    const date = new Date(datestr);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = date.getDay();
    return days[dayIndex];
  };

  useEffect(() => {
    props.setAppointmentDate({ date: selectedDate, hour: "" });
  }, [selectedDate]);

  const vendorOpenHours = props.vendor.openingHours;

  const getSelectedDateOpenHours = (
    openhours: OpenHours[],
    selectedDate: string
  ) => {
    const day = getDayName(selectedDate);
    const openHours = openhours.find(
      (element) => element?.day.toLocaleLowerCase() === day?.toLocaleLowerCase()
    );
    return openHours;
  };

  const [openHoursForDay, setOpenHoursForDay] = useState<OpenHours>();
  useEffect(() => {
    const oh = getSelectedDateOpenHours(vendorOpenHours, selectedDate);
    if (oh) setOpenHoursForDay(oh);
  }, [vendorOpenHours, selectedDate]);

  const theme = useTheme();
  const cartProps = (item: string) => ({
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: checkIfDateIsFromPast(item)
      ? theme.colors.primaryDarkO
      : selectedDate === item
      ? theme.colors.accent
      : theme.colors.primaryDark400,
  });

  return (
    <Box>
      <Wrapper>
        {cangoBack && (
          <Button
            onClick={() => {
              scrollPrevious();
            }}
            style={{
              aspectRatio: 1,
              height: "1rem",
              position: "absolute",
              top: "40%",
              left: "1rem",
            }}
          >
            <FaArrowCircleLeft />
          </Button>
        )}
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
          }}
        >
          {previousWeek.map((item) => {
            const props = cartProps(item);
            return (
              <Card
                orientation="horizontal"
                size="sm"
                key={item}
                onClick={() => {
                  setSelectedDate(item);
                }}
                variant="outlined"
                sx={props}
              >
                <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
                  <Typography level="body-xs" color={theme.colors.text}>
                    {item}
                  </Typography>
                  <Typography level="body-xs" color={theme.colors.textOpposite}>
                    {getDayName(item)}
                  </Typography>
                </Box>
              </Card>
            );
          })}
          {currentWeek.map((item) => {
            const props = cartProps(item);
            return (
              <Card
                orientation="horizontal"
                size="sm"
                key={item}
                variant="outlined"
                onClick={() => {
                  setSelectedDate(item);
                }}
                sx={props}
              >
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    mx: 1,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <Typography level="body-xs" color={theme.colors.text}>
                    {item}
                  </Typography>
                  <Typography level="body-xs" color={theme.colors.textOpposite}>
                    {getDayName(item)}
                  </Typography>
                </Box>
              </Card>
            );
          })}
          {nextWeek.map((item) => {
            const props = cartProps(item);

            return (
              <Card
                orientation="horizontal"
                size="sm"
                key={item}
                variant="outlined"
                onClick={() => {
                  setSelectedDate(item);
                }}
                sx={props}
              >
                <Box sx={{ whiteSpace: "nowrap", mx: 1, cursor: "pointer" }}>
                  <Typography level="body-xs" color={theme.colors.text}>
                    {item}
                  </Typography>
                  <Typography level="body-xs" color={theme.colors.textOpposite}>
                    {getDayName(item)}
                  </Typography>
                </Box>
              </Card>
            );
          })}
        </Box>
        <Button
          onClick={() => {
            scrollNext();
          }}
          style={{
            aspectRatio: 1,
            height: "1rem",
            position: "absolute",
            top: "40%",
            right: "1rem",
            userSelect: "none",
          }}
        >
          <FaArrowCircleRight />
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: "1rem",
          }}
        ></Box>
      </Wrapper>
      {openHoursForDay && (
        <>
          {openHoursForDay.closed ? (
            <img
              src={fullyBooked}
              style={{ maxHeight: "10rem", objectFit: "contain" }}
            />
          ) : (
            <HourSelector
              appointmentDate={props.appointmentDate}
              setAppointmentDate={props.setAppointmentDate}
              openHours={openHoursForDay}
            />
          )}
        </>
      )}
    </Box>
  );
};

Calendar.defaultProps = {
  // bla: 'test',
};

export default Calendar;
