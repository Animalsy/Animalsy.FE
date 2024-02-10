import { useEffect, useRef, useState } from "react";
import { MenuListComponent, MenuListItem, MenuSubList } from "./menu.styles";
import {
  CiDiscount1,
  CiPercent,
  CiBag1,
  CiHome,
  CiPassport1,
} from "react-icons/ci";
import { NavigationData } from "../../../../static/Navigation";
import { Collapse } from "@mui/material";

const MenuList = ({ isscrolledtotop }: { isscrolledtotop: boolean }) => {
  const [servicesHover, setServicesHover] = useState<{
    button: boolean;
    body: boolean;
  }>({
    button: false,
    body: false,
  });
  const [hoverServicesOffset, setHoverServicesOffset] = useState(0);

  const [specialsHover, setSpecialsHover] = useState<{
    button: boolean;
    body: boolean;
  }>({ body: false, button: false });
  const [hoverSpecialsOffset, setHoverSpecialsOffset] = useState(0);

  // const servicesRef = useRef<any>(null);
  // const specialsRef = useRef<any>(null);

  // useEffect(() => {
  //   if (servicesRef) {
  //     setHoverServicesOffset(servicesRef.current.offsetLeft);
  //   }
  //   if (specialsRef) {
  //     setHoverSpecialsOffset(specialsRef.current.offsetLeft);
  //   }
  // }, [servicesRef, specialsRef, servicesHover]);

  return (
    <div style={{ position: "relative" }}>
      <MenuListComponent>
        {NavigationData.map((item, index) => {
          return (
            <>
              <MenuListItem
                isscrolledtotop={isscrolledtotop}
                key={index}
                to={item.navigateTo}
              >
                <item.icon />
                {item.name}
              </MenuListItem>
            </>
          );
        })}
      </MenuListComponent>
    </div>
  );
};

export default MenuList;
