import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

interface NavbarDrawerItems {
  handleDrawerToggle: () => void;
  navItems: Array<string>;
}

const NavbarDrawer: React.FC<NavbarDrawerItems> = ({
  handleDrawerToggle,
  navItems,
}) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="/Logo.png" alt="logo" className="w-1/4 mx-auto" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={item} /> */}
              <Button
                component="a"
                href={item.toLowerCase()}
                sx={{
                  fontSize: 16,
                  textDecoration: "none",
                  color: "black",
                  margin: "auto"
                }}
              >
                {item}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavbarDrawer;
