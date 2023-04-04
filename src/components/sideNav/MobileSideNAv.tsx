import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import navItems from "./SideNavContents";
import { Stack, Typography } from "@mui/material";
import SideNavItem from "./SideNavItem";
import MenuIcon from "@mui/icons-material/Menu";

type Anchor = "left";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      display={{ xs: "block", sm: "block", lg: "none" }}
      sx={{ minWidth: "230px" }}
    >
      {navItems.map((navItem, index) => {
        const { contents, section } = navItem;

        return (
          <Stack>
            <Stack key={index} gap={1}>
              <Typography
                fontSize="12px"
                variant="body1"
                component="p"
                fontWeight="500px"
                fontFamily="Work Sans', sans-serif"
                color="#545F7D"
                style={{ margin: "8px 5px" }}
              >
                {section && section}
              </Typography>

              {contents.map((content, index) => {
                return <SideNavItem key={index} {...content} />;
              })}
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
