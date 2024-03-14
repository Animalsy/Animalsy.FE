import { Wrapper } from "./styles";
import { Vendor } from "../../../types/vendor";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import TextComponents from "../../../components/TextComponents";
import { useTheme } from "styled-components";

type Props = {
  vendor: Vendor;
};

const OpenHours = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [elementHeight, setelementHeight] = useState(0);
  const [openHoursElementHeight, setOpenHoursElementHeight] = useState(0);
  const openHours = props.vendor.openingHours;

  const [springs, api] = useSpring(() => ({
    from: { height: 30 },
  }));

  useEffect(() => {
    if (openHoursElementHeight !== 0 && elementHeight !== 0) setIsOpen(false);
  }, [elementHeight, openHoursElementHeight]);
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    !isOpen
      ? api.start({
          from: {
            height: elementHeight,
          },
          to: {
            height: openHoursElementHeight + elementHeight,
          },
        })
      : api.start({
          from: {
            height: openHoursElementHeight + elementHeight,
          },
          to: {
            height: elementHeight,
          },
        });
  };

  const textRef = useRef<HTMLDivElement>(null);
  const openHoursRef = useRef<HTMLDivElement>(null);

  const getHeight = () => {
    if (textRef.current) {
      const height = textRef.current.offsetHeight;
      return height;
    }
  };

  const getHoursHeight = () => {
    if (openHoursRef.current) {
      const height = openHoursRef.current.offsetHeight;
      return height;
    }
  };

  useEffect(() => {
    const height = getHeight();
    if (height) setelementHeight(height);

    const openHoursHeight = getHoursHeight();
    if (openHoursHeight) setOpenHoursElementHeight(openHoursHeight);
  }, []);

  const themes = useTheme();
  return (
    <Wrapper style={{}}>
      <animated.div
        onClick={handleClick}
        style={{
          background: themes.colors.primaryDark400,
          borderRadius: 8,
          padding: "0.2rem 1rem",
          cursor: "pointer",
          ...springs,
        }}
      >
        <TextComponents.Body accent ref={textRef}>
          {props.vendor.name}'s opening hours
        </TextComponents.Body>
        {isOpen && (
          <Wrapper>
            <TextComponents.Body></TextComponents.Body>
            <Wrapper ref={openHoursRef} style={{ flexDirection: "column" }}>
              {openHours.map((hours, index) => {
                return (
                  <div key={index}>
                    <TextComponents.Body>{hours.day}</TextComponents.Body>
                    <TextComponents.Body>
                      {hours.open} - {hours.close}
                    </TextComponents.Body>
                  </div>
                );
              })}
            </Wrapper>
          </Wrapper>
        )}
      </animated.div>
    </Wrapper>
  );
};

OpenHours.defaultProps = {
  // bla: 'test',
};

export default OpenHours;
