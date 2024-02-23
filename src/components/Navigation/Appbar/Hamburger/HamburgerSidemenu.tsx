import React, { useRef } from "react";
import { StyledMenu } from "./Hamburger.styled";
import useOnClickOutside from "../../../../hooks/clickOutside";
import { HamburgerIcon } from ".";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavigationData } from "../../../../static/Navigation";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export const HamburgerSidemenu = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  const navigate = useNavigate();

  const [openSubMenu, setOpenSubMenu] = React.useState("none");
  const handleClick = (data: NavigationData) => {
    setOpenSubMenu(data.name);
    if (openSubMenu === data.name) {
      setOpenSubMenu("none");
    }
    if (!data.nestedNavitems || data.nestedNavitems?.length == 0)
      navigate(data.navigateTo);
  };

  const theme = useTheme();
  return (
    <StyledMenu ref={ref} open={isOpen}>
      <HamburgerIcon isOpen={isOpen} setIsOpen={setOpen} />
      <div style={{ height: "100%", margin: "1rem", marginTop: "3rem" }}>
        <List
          sx={{
            width: "100%",
            maxHeight: "80dvh",
            overflowY: "auto",
            overflowX: "hidden",
            height: "100%",
          }}
          component="nav"
        >
          {NavigationData.map((item, index) => {
            return (
              <>
                <ListItemButton onClick={() => handleClick(item)} key={index}>
                  {item.icon && (
                    <ListItemIcon>
                      <item.icon
                        color={
                          item.color === "accent"
                            ? theme.colors.accent
                            : theme.colors.primary
                        }
                      />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={item.name}
                    style={{
                      color:
                        item.color === "accent"
                          ? theme.colors.accent
                          : theme.colors.primary,
                    }}
                  />

                  {item.nestedNavitems &&
                    item.nestedNavitems.length !== 0 &&
                    openSubMenu === item.name && (
                      <MdExpandLess
                        color={
                          item.color === "accent"
                            ? theme.colors.accent
                            : theme.colors.primary
                        }
                      />
                    )}
                  {item.nestedNavitems &&
                    item.nestedNavitems.length !== 0 &&
                    openSubMenu !== item.name && (
                      <MdExpandMore
                        color={
                          item.color === "accent"
                            ? theme.colors.accent
                            : theme.colors.primary
                        }
                      />
                    )}
                </ListItemButton>
                {item.nestedNavitems && item.nestedNavitems?.length !== 0 && (
                  <Collapse
                    in={openSubMenu === item.name ? true : false}
                    timeout="auto"
                    unmountOnExit
                  >
                    {item.nestedNavitems.map((nestedItem) => {
                      return (
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={() => {
                            navigate(
                              `${item.navigateTo}${nestedItem.navigateTo}`
                            );
                          }}
                        >
                          <ListItemText primary={nestedItem.name} />
                        </ListItemButton>
                      );
                    })}
                  </Collapse>
                )}
              </>
            );
          })}
          {/*
        <ListItemButton onClick={() => handleClick("Services")}>
          <ListItemIcon>
            <CiBag1 style={{ justifySelf: "center" }} />
          </ListItemIcon>
          <ListItemText primary="Services" />
          {openSubMenu === "Services" ? <MdExpandLess /> : <MdExpandMore />}
        </ListItemButton>

        <Collapse
          in={openSubMenu === "Services" ? true : false}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding style={{ marginLeft: "1rem" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Grooming" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Insurance" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Photography" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Veterinary Care" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Transport" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Boarding" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Training" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Sitting" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Adoption" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Supplies" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => handleClick("Specials")}>
          <ListItemIcon>
            <CiDiscount1 style={{ justifySelf: "center" }} />
          </ListItemIcon>
          <ListItemText primary="Specials" />
          {openSubMenu === "Specials" ? <MdExpandLess /> : <MdExpandMore />}
        </ListItemButton>

        <Collapse
          in={openSubMenu === "Specials" ? true : false}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding style={{ marginLeft: "1rem" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Grooming" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Insurance" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Photography" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Veterinary Care" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Transport" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Boarding" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Training" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Sitting" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Adoption" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Pet Supplies" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => handleClick("Offers")}>
          <ListItemIcon>
            <CiPercent style={{ justifySelf: "center" }} />
          </ListItemIcon>
          <ListItemText primary="Offers" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick("Profile")}>
          <ListItemIcon>
            <CiPassport1 style={{ justifySelf: "center" }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton> */}
        </List>
      </div>
    </StyledMenu>
  );
};
