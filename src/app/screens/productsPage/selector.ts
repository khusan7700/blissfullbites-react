import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import ProductsPage from ".";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retriecerRestaurant = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.restaurant
);

export const retrieverChosenProduct = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.chosenProduct
);

export const retriecerProductst = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.products
);
