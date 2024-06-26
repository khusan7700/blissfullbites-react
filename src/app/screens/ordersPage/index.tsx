import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import PlaceIcon from "@mui/icons-material/Place";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-container"}>
      <Stack className={"order-left"}>
        <TabContext value={value}>
          <Box className={"order-nav-frame"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className={"table_list"}
              >
                <Tab label="PAUSED ORDERS" value={"1"} />
                <Tab label="PROCESS ORDERS" value={"2"} />
                <Tab label="FINISHED ORDERS" value={"3"} />
              </Tabs>
            </Box>
          </Box>
          <Stack className={"order-main-content"}>
            <PausedOrders />
            <ProcessOrders />
            <FinishedOrders />
          </Stack>
        </TabContext>
      </Stack>

      {/* RIGHT BOXES */}
      {/* RIGHT BOXES */}
      {/* RIGHT BOXES */}
      {/* RIGHT BOXES */}

      <Stack className={"order-right"}>
        <Box className={"order-info-box"}>
          {/* top box */}
          {/* top box */}
          {/* top box */}
          {/* top box */}
          {/* top box */}
          <Box className={"member-box"}>
            <div className={"order-user-img"}>
              <img src={"/img/justin.webp"} className={"order-user-avatar"} />
              <div className={"order-user-icon-box"}>
                <AccountCircleIcon className="order-user-prof-img" />
              </div>
            </div>
            <span className={"order-user-name"}>Martin</span>
            <span className={"order-user-prof"}>User</span>
          </Box>
          <Box className={"liner"}></Box>
          <div className="location-txt">
            <PlaceIcon className="local-icon" /> <span>South Korea, Busan</span>
          </div>
        </Box>
      </Stack>

      {/* bottom box */}
      {/* bottom box */}
      {/* bottom box */}
      {/* bottom box */}

      <Stack className="bottom-box">
        <input
          className="input-num"
          type="search"
          placeholder="Card Number: 5243 4090 2002 ****"
        />
        <Stack className="middle-inputs">
          <input className="input-month" type="search" placeholder="07 / 24" />
          <input className="input-cvv" type="search" placeholder="CVV: 010" />
        </Stack>
        <input
          className="input-user-card-name"
          type="search"
          placeholder="Justin Robertson"
        />
        <Stack className="type-cards-icons">
          <img src={"/icons/western-card.svg"} />
          <img src={"/icons/master-card.svg"} />
          <img src={"/icons/paypal-card.svg"} />
          <img src={"/icons/visa-card.svg"} />
        </Stack>
      </Stack>
    </div>
  );
}
