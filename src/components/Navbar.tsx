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
import { alpha, Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Login", "Register"];

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
      <AppBar component="nav" sx={{ backgroundColor: "common.black" }}>
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
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontWeight: 600
              }}
            >
              LOGO
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 600,
                    ":hover": {
                      background: alpha("#fff", 0.15)
                    },
                    paddingX: 2
                  }}
                  onClick={() => router.push(`${item.toLowerCase()}`)}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "none" },
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
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
              width: drawerWidth,
            },
          }}
        >
          <NavbarDrawer
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
          />
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
