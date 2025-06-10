"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavbarDrawer from "./NavbarDrawer";
import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { NavbarItems, Props } from "@/model/types";

const navItems: Array<NavbarItems> = [
  {
    id: 1,
    destination: "About",
    buttonType: true,
    color: true
  },
  {
    id: 2,
    destination: "Contact",
    buttonType: true,
    color: true
  },
  {
    id: 3,
    destination: "Volunteer",
    buttonType: true,
    color: true
  }
]

function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: 'linear-gradient(90deg, #72846A 0%, #66A7CD 100%)' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="/Logo.png"
              alt="Logo"
              className="hidden sm:block mr-4"
              style={{ height: 40, marginRight: 32 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: { xs: "flex", sm: "none" },
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                gap: 2
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  component="a"
                  href={`#${item.destination.toLowerCase()}`}
                  variant={item.buttonType ? "outlined" : "contained"}
                  color={item.color ? "primary" : "success"}
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 600,
                    paddingX: 2
                  }}
                >
                  {item.destination}
                </Button>
              ))}
            </Box>
            <img
              src="/Logo.png"
              alt="Logo"
              className="flex sm:hidden"
              style={{ height: 32 }}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          <NavbarDrawer
            handleDrawerToggle={handleDrawerToggle}
            navItems={["About", "Contact", "Volunteer"]}
          />
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
