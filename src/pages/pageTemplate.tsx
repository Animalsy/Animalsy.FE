import React, { useEffect, useState } from "react";
import NavigationComponents from "../components/Navigation";
import FooterSection from "../components/Navigation/footer/FooterSection";

const PageTemplate = (props: {
  children: React.ReactNode;
  offsetTop?: number;
  offsetColor?: number;
}) => {
  const [isScrolled, setIsScrolled] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (props.offsetColor === 0 || props.offsetColor)
      setIsScrolled(scrollPosition + 1 >= props.offsetColor ? false : true);
    else setIsScrolled(scrollPosition >= window.innerHeight ? false : true);
  };
  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        paddingTop: props.offsetTop ? `${props.offsetTop}rem` : 0,
        zIndex: 10000,
      }}
    >
      <NavigationComponents.AppBar isscrolledtotop={isScrolled} />
      {props.children}
      <FooterSection />
    </div>
  );
};

export default PageTemplate;
