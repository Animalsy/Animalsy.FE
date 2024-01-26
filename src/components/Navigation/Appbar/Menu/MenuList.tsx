import { useEffect, useRef, useState } from "react";
import { MenuListComponent, MenuListItem, MenuSubList } from "./menu.styles";
import {
  CiDiscount1,
  CiPercent,
  CiBag1,
  CiHome,
  CiPassport1,
} from "react-icons/ci";

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

  const servicesRef = useRef<any>(null);
  const specialsRef = useRef<any>(null);

  useEffect(() => {
    if (servicesRef) {
      setHoverServicesOffset(servicesRef.current.offsetLeft);
    }
    if (specialsRef) {
      setHoverSpecialsOffset(specialsRef.current.offsetLeft);
    }
  }, [servicesRef, specialsRef, servicesHover]);

  return (
    <div style={{ position: "relative" }}>
      <MenuListComponent>
        <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
          <CiHome style={{ justifySelf: "center" }} /> Home
        </MenuListItem>
        {/* services */}
        <MenuListItem
          isscrolledtotop={isscrolledtotop}
          to={"/services"}
          ref={servicesRef}
          onMouseEnter={() => {
            setServicesHover((last) => ({ ...last, button: true }));
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setServicesHover((last) => ({ ...last, button: false }));
            }, 400);
          }}
        >
          <CiBag1 style={{ justifySelf: "center" }} /> Services
        </MenuListItem>
        <MenuSubList
          isscrolledtotop={isscrolledtotop}
          offset={hoverServicesOffset}
          isHovered={
            servicesHover.body === true || servicesHover.button === true
          }
          onMouseEnter={() => {
            setServicesHover((last) => ({ ...last, body: true }));
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setServicesHover((last) => ({ ...last, body: false }));
            }, 400);
          }}
        >
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Services 1
          </MenuListItem>
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Services 2
          </MenuListItem>
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Services 3
          </MenuListItem>
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Services 4
          </MenuListItem>
        </MenuSubList>
        {/* specials */}
        <MenuListItem
          isscrolledtotop={isscrolledtotop}
          to={"/"}
          ref={specialsRef}
          onMouseEnter={() => {
            setSpecialsHover((last) => ({ ...last, button: true }));
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setSpecialsHover((last) => ({ ...last, button: false }));
            }, 400);
          }}
        >
          <CiDiscount1 style={{ justifySelf: "center" }} /> Specials
        </MenuListItem>
        <MenuSubList
          isscrolledtotop={isscrolledtotop}
          offset={hoverSpecialsOffset}
          isHovered={specialsHover.body || specialsHover.button}
          onMouseEnter={() => {
            setSpecialsHover((last) => ({ ...last, body: true }));
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setSpecialsHover((last) => ({ ...last, body: false }));
            }, 400);
          }}
        >
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Specials 1
          </MenuListItem>
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Specials 2
          </MenuListItem>
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Specials 3
          </MenuListItem>
          <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
            Specials 4
          </MenuListItem>
        </MenuSubList>
        <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
          <CiPercent style={{ justifySelf: "center" }} /> Offers
        </MenuListItem>
        <MenuListItem isscrolledtotop={isscrolledtotop} to={"/"}>
          <CiPassport1 style={{ justifySelf: "center" }} /> Profile
        </MenuListItem>
      </MenuListComponent>
    </div>
  );
};

export default MenuList;
