import React, { ChangeEvent, useEffect, useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retriecerProductst } from "./selector";
import { Product, ProductInquiry } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";

/**  Redux slice & selector **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

/**  Redux slice & selector **/
const productsRetriever = createSelector(retriecerProductst, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLERS **/

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const serachOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const serachProductHendler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandlar = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseDishHandlar = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="products">
      <Container>
        {/* ------------------------ grandpadent class------------------------  */}
        <Stack flexDirection={"column"} alignItems={"center"}>
          {/*------------------------ section 1--------------------------- */}
          <Stack className={"avatar-txt-srch"}>
            <Box className={"burak-restaurant-txt"}> Burak Restaurant</Box>

            <Stack className="inputs">
              <input
                className="input-srch"
                type="search"
                placeholder="Type here"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") serachProductHendler();
                }}
              />
              <button className="input-btn" onClick={serachProductHendler}>
                SEARCH
                <SearchIcon />
              </button>
            </Stack>
          </Stack>
        </Stack>
        {/* ------------------------ section 2 ------------------------ */}

        <Stack className={"dishes-filter-section"}>
          <Stack className={"dishes-filter-box"}>
            <Button
              variant={"contained"}
              className="order"
              color={
                productSearch.order === "createdAt" ? "primary" : "secondary"
              }
              onClick={() => serachOrderHandler("createdAt")}
            >
              New
            </Button>

            <Button
              variant={"contained"}
              className="order"
              color={
                productSearch.order === "productPrice" ? "primary" : "secondary"
              }
              onClick={() => serachOrderHandler("ProductPrice")}
            >
              Price
            </Button>

            <Button
              variant={"contained"}
              className="order"
              color={
                productSearch.order === "productViews" ? "primary" : "secondary"
              }
              onClick={() => serachOrderHandler("productViews")}
            >
              Views
            </Button>
          </Stack>
        </Stack>
        {/*------------------------  section 3 ------------------------  */}
        {/*------------------------  section 3 ------------------------  */}
        {/*------------------------  section 3 ------------------------  */}
        {/*------------------------  section 3 ------------------------  */}
        {/*------------------------  section 3 ------------------------  */}
        <Stack className={"list-category-section"}>
          <Stack>
            <div className="gategory-main">
              <Button
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.OTHER
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.OTHER)}
              >
                Other
              </Button>

              <Button
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.DESSERT
                    ? "primary"
                    : "secondary"
                }
                onClick={() =>
                  searchCollectionHandler(ProductCollection.DESSERT)
                }
              >
                Dessert
              </Button>

              <Button
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.DRINK
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.DRINK)}
              >
                Drink
              </Button>

              <Button
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.SALAD
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.SALAD)}
              >
                Salad
              </Button>

              <Button
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.DISH
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.DISH)}
              >
                Dish
              </Button>
            </div>
          </Stack>
          {/*----------------------boxes--------------------------  */}

          <Stack className="product-wrapper">
            {products.length !== 0 ? (
              products.map((product, index) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                const sizeVolume =
                  product.productCollection === ProductCollection.DRINK
                    ? product.productVolume + "litre"
                    : product.productSize + "size";
                return (
                  <Stack
                    key={product._id}
                    className={"product-card"}
                    onClick={() => chooseDishHandlar(product._id)}
                  >
                    {/* ------------------------box start------------------------ */}
                    <Stack
                      className={"product-img"}
                      sx={{ backgroundImage: `url(${imagePath})` }}
                    >
                      <div className={"product-sale"}>{sizeVolume}</div>

                      <Stack className="hover-btns">
                        <Button
                          className={"shop-btn"}
                          onClick={(e) => {
                            onAdd({
                              _id: product._id,
                              quantity: 1,
                              name: product.productName,
                              price: product.productPrice,
                              image: product.productImages[0],
                            });
                            e.stopPropagation();
                          }}
                        >
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <RemoceRedEyeIcon
                          className="eye-icon"
                          sx={{
                            color:
                              product.productViews === 0 ? "gray" : "white",
                          }}
                        />
                        <Badge
                          className="eye"
                          badgeContent={product.productViews}
                          color="secondary"
                        ></Badge>
                      </Stack>
                    </Stack>
                    {/* ------------------------box end------------------------ */}
                    {/* ------------------------box onder text start------------------------ */}
                    <Box className={"product-desc"}>
                      <span className={"product-title"}>
                        {product.productName}
                      </span>
                      <div className={"product-desc-txt"}>
                        <MonetizationOnIcon />
                        {product.productPrice}
                      </div>
                    </Box>
                    {/* ------------------------box onder text end------------------------ */}
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Product are not available!</Box>
            )}
          </Stack>

          <Stack className="pagination-section">
            <Pagination
              count={
                products.length !== 0
                  ? productSearch.page + 1
                  : productSearch.page
              }
              page={productSearch.page}
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
              onChange={paginationHandlar}
            />
          </Stack>
        </Stack>
        {/* ------------------------  section 4 ------------------------ */}
        {/* ------------------------  section 4 ------------------------ */}
        {/* ------------------------  section 4 ------------------------ */}
        {/* ------------------------  section 4 ------------------------ */}
        {/* ------------------------  section 4 ------------------------ */}
      </Container>
      <Stack className={"list-category-section"}></Stack>
      {/* //div section 1 */}
      {/* //div section 1 */}
      {/* //div section 1 */}
      {/* //div section 1 */}
      <div className={"brands-logo"}>
        <Box className={"txt"}>Our Family Brands</Box>

        <Stack className="brand-all-box">
          <Stack className="brand-box">
            <Stack className="img">
              <img src="/img/gurme.webp" />
            </Stack>
          </Stack>

          <Stack className="brand-box">
            <Stack className="img">
              <img src="/img/sweets.webp" />
            </Stack>
          </Stack>

          <Stack className="brand-box">
            <Stack className="img">
              <img src="/img/seafood.webp" />
            </Stack>
          </Stack>

          <Stack className="brand-box">
            <Stack className="img">
              <img src="/img/doner.webp" />
            </Stack>
          </Stack>
        </Stack>
      </div>
      {/* //div section 2 */}
      {/* //div section 2 */}
      {/* //div section 2 */}
      {/* //div section 2 */}
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
