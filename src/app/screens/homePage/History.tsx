import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  { memberName: "Martin", memberImage: "/img/Terminator-1.jpg" },
  { memberName: "Justin", memberImage: "/img/Terminator-2.jpg" },
  { memberName: "Rose", memberImage: "/img/Terminator-3.jpg" },
  { memberName: "Nusret", memberImage: "/img/Terminator-4.jpg" },
];

{
}

export default function ActiveUsers() {
  return (
    <div className={"history-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Our History</Box>
          <Stack className="card-frame">
            <Stack className="history">
              <Stack className="right-1">
                <img
                  className="photo-01"
                  src="/img/old-photo-fon.jpeg"
                  alt=""
                />
                <img
                  className="photo-02"
                  src="/img/old-photo-shop.jpg"
                  alt=""
                />
                <span className="text-02">
                  Our store was solemnly opened in 1980
                </span>
                <span className="text-03">
                  At the beginning of the store we opened, only 1 family members
                  started the work and we left to prepare and sell 10 types of
                  sweets.
                </span>
              </Stack>

              <Stack className="right-2">
                <img
                  className="photo-02"
                  src="/img/old-photo-insite.jpeg"
                  alt=""
                />
                <span className="text-02">
                  In 1990, products increased 3 times
                </span>
                <span className="text-03">
                  With more products in our store than ever before, we also
                  offer shipping to the United States.
                </span>
              </Stack>

              <Stack className="right-3">
                <img
                  className="photo-02"
                  src="/img/old-photo-team.jpg"
                  alt=""
                />
                <span className="text-02">
                  Train employees and send them to new stores
                </span>
                <span className="text-03">
                  We've grown from the launch of our candy brand to expanding
                  stores across the US and training and upskilling new
                  employees.
                </span>
              </Stack>

              <Stack className="right-4">
                <img
                  className="photo-02"
                  src="/img/old-photo-cheff.jpg"
                  alt=""
                />
                <span className="text-02">
                  We continued to work in factories that were bigger than before
                </span>
                <span className="text-03">
                  We opened the only candy factory in the USA and started
                  exporting more than 100 sweets all over the world.
                </span>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
