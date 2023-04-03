import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import navItems from "./SideNavContents";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  return (
    <Box
      display={{ xs: "none", sm: "none", lg: "block" }}
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
};

export default SideNav;
