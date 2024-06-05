import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = true;

  return (
    <Stack className="home-navbar">
      <Container className="navbar-container">
        <Stack className="top-icons">
          <Box className="images">
            <img className="search-icon" src="/icons/search.svg" alt="" />{" "}
            <input
              className="search-input"
              type="searchtext"
              placeholder="ENTER YOUR KEYBOARD"
            />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={"/icons/user-icon.svg"}
                aria-haspopup={"true"}
              />
            )}
            <img src="/icons/heart.svg" alt="" />
            <img src="/icons/basket-empty.svg" alt="" />
            <img src="/icons/menu.svg" alt="" />
          </Box>
        </Stack>
        <Box className="border-line"></Box>
        <Box className="border-line-2"></Box>

        <Stack className="menu">
          <Box></Box>
          {/* navbat start */}
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            {/* BASKET */}

            <Stack>
              <img src="" alt="" />
            </Stack>
          </Stack>
          {/* navbat end */}
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"header-box"}>box-1</Box>
            <Box className={"header-box"}>box-1</Box>
            <Box className={"header-box"}>box-1</Box>
            <Box className={"header-box"}>box-1</Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button variant={"contained"} className={"signup-button"}>
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Stack className={"logo-frame"}></Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
