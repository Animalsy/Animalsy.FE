import React, { useState } from "react";
import { MenuListComponent, MenuListItem } from "./menu.styles";
import { NavigationData } from "../../../../static/Navigation";
import { Menu, MenuItem } from "@mui/material";
import { useTheme } from "styled-components";
import { menuCategories } from "../../../../static/menuCategories";
import { useNavigate } from "react-router-dom";

const MenuList = ({ isscrolledtotop }: { isscrolledtotop: boolean }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [lastSelected, setLastSelected] = useState<string | null>(null);
  console.log("test netlify");
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (name: string) => {
    console.log(name, lastSelected);
    if (lastSelected === "home") {
      navigate("/");
    } else {
      navigate(`/${lastSelected}`);
    }
  };
  const handleHover = (event: React.MouseEvent<HTMLElement>, name: string) => {
    setLastSelected(name.toLowerCase());

    if (name === "Services" || name === "Specials") {
      if (event.currentTarget === anchorEl) {
        setAnchorEl(null);
      } else setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  return (
    <div style={{ position: "relative" }}>
      <MenuListComponent>
        {NavigationData.map((item, index) => {
          return (
            <>
              <MenuListItem
                isscrolledtotop={isscrolledtotop}
                key={index}
                onClick={() => handleClick(item.name)}
                onMouseEnter={(event) => handleHover(event, item.name)}
              >
                <item.icon />
                {item.name}
              </MenuListItem>
            </>
          );
        })}
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                background: "#ffffff75",
                color: theme.colors.primaryDark,
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "#ffffff45",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {menuCategories.map((item, index) => {
            return (
              <MenuItem
                key={index}
                onClick={() => {
                  navigate(`/${lastSelected}/${item.url}`);
                }}
              >
                {/* <ListItemIcon>
                  <item.icon />
                </ListItemIcon> */}
                {item.category}
              </MenuItem>
            );
          })}
        </Menu>
      </MenuListComponent>
    </div>
  );
};

export default MenuList;
