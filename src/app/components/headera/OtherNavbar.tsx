import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function OtherNavbar() {
  const authMember = true;

  return (
    <div className="other-navbar">
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
          <Box>
            {/* <NavLink to={"/"}>
              <img className="brand-logo" src="/icons/text.logo.png" />
            </NavLink> */}
          </Box>
          {/* navbat start */}
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products">Products</NavLink>
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
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
