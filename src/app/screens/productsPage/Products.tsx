import React from "react";
import { Box, Button, Container, PaginationItem, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoceRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import paginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ClassNames } from "@emotion/react";

import GradeIcon from "@mui/icons-material/Grade";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const products = [
  { productName: "Cutlet", imagePath: "/products/cheese-cake-01.jpg" },
  { productName: "Kebab", imagePath: "/products/cheese-cake-01.jpg" },
  { productName: "Kebab", imagePath: "/products/cheese-cake-01.jpg" },
  { productName: "Lavash", imagePath: "/products/cheese-cake-01.jpg" },
  { productName: "Lavash", imagePath: "/products/cheese-cake-01.jpg" },
  { productName: "Cutlet", imagePath: "/products/cheese-cake-01.jpg" },
  { productName: "Kebab", imagePath: "/products/cheese-cake-01.jpg" },
  { productName: "Kebab", imagePath: "/products/cheese-cake-01.jpg" },
];

export default function Products() {
  return (
    <div className="products">
      <Container>
        {/* ------------------------ grandpadent class------------------------  */}
        <Stack flexDirection={"column"} alignItems={"center"}>
          {/*------------------------ section 1--------------------------- */}

          <Stack className={"avatar-txt-srch"}>
            <Box className={"burak-restaurant-txt"}>
              {" "}
              BlissfulBites Cake Restaurant
            </Box>

            <Stack className="inputs">
              <input
                className="input-srch"
                type="search"
                placeholder="Type here"
              />
              <button className="input-btn">
                SEARCH
                <SearchIcon />
              </button>
            </Stack>
          </Stack>
        </Stack>
        {/* ------------------------ section 2 ------------------------ */}

        <Stack className={"dishes-filter-section"}>
          <Stack className={"dishes-filter-box"}>
            <Button variant={"contained"} color={"primary"} className="order">
              New
            </Button>

            <Button variant={"contained"} color={"secondary"} className="order">
              Price
            </Button>

            <Button variant={"contained"} color={"secondary"} className="order">
              Views
            </Button>
          </Stack>
        </Stack>
        {/*------------------------  section 3 ------------------------  */}

        <Stack className={"list-category-section"}>
          <Stack>
            <div className="gategory-main">
              <Button variant={"contained"} color={"secondary"}>
                Order
              </Button>

              <Button variant={"contained"} color={"secondary"}>
                Wedding
              </Button>

              <Button variant={"contained"} color={"secondary"}>
                Drink
              </Button>

              <Button variant={"contained"} color={"secondary"}>
                Pieces
              </Button>

              <Button variant={"contained"} color={"primary"}>
                Cake
              </Button>
            </div>
          </Stack>
          {/*------------------------------------------------  */}

          <Stack className="product-wrapper">
            {products.length !== 0 ? (
              products.map((product, index) => {
                return (
                  <Stack key={index} className="product-card">
                    <Stack
                      className={"product-img"}
                      sx={{ backgroundImage: `url(${product.imagePath})` }}
                    >
                      <div className={"product-sale"}>Normal size</div>

                      <Stack className="hover-btns">
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <RemoceRedEyeIcon
                          className="eye-icon"
                          sx={{ color: 20 ? "gray" : "white" }}
                        />
                        <Badge
                          className="eye"
                          badgeContent={20}
                          color="secondary"
                        ></Badge>
                      </Stack>
                    </Stack>

                    <Box className={"product-desc"}>
                      <span className={"product-title"}>
                        {product.productName}
                      </span>
                      <div className={"product-desc-txt"}>
                        <MonetizationOnIcon />
                        {12}
                      </div>
                    </Box>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Product are not available!</Box>
            )}
          </Stack>

          <Stack className="pagination-section">
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
        {/* ------------------------  section 4 ------------------------ */}

        <Stack className={"list-category-section"}></Stack>
      </Container>
      {/* //div section 1 */}
      <div className={"brands-logo"}>
        <Box className={"txt"}>Our Chef</Box>

        <Stack className="brand-all-box">
          <Stack className="brand-box">
            <img src="/img/cooker-01.jpg" />
            <div className="include-all">
              <h1>ANNA</h1>
              <p>From California</p>
              <p>since 2015</p>
              <div>
                <GradeIcon className="GradeIcon" />
                <GradeIcon className="GradeIcon" />
                <GradeIcon className="GradeIcon" />
                <GradeIcon className="GradeIcon" />
                <GradeIcon className="GradeIcon" />
              </div>
            </div>
          </Stack>

          <Stack className="brand-box">
            <Stack className="img">
              <img src="/img/cooker-02.jpg" />
              <div className="include-all">
                <h1>DAVID</h1>
                <p>From California</p>
                <p>since 2016</p>
                <div>
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                </div>
              </div>
            </Stack>
          </Stack>

          <Stack className="brand-box">
            <Stack className="img">
              <img src="/img/cooker-03.jpg" />
              <div className="include-all">
                <h1>SELENA</h1>
                <p>From LosAngles</p>
                <p>since 2019</p>
                <div>
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <StarHalfIcon className="GradeIcon" />
                </div>
              </div>
            </Stack>
          </Stack>

          <Stack className="brand-box">
            <Stack className="img">
              <img src="/img/cooker-04.jpg" />
              <div className="include-all">
                <h1>ALIS</h1>
                <p>From Bostan</p>
                <p>since 2022</p>
                <div>
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <GradeIcon className="GradeIcon" />
                  <StarOutlineIcon className="StarOutlineIcon" />
                </div>
              </div>
            </Stack>
          </Stack>
        </Stack>
      </div>
      {/* //div section 2 */}
      <div className={"address"}>
        <Container>
          <Stack className="address-area">
            <Box className={"title"}>Our Addres</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
