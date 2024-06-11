import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";
export default function Statistics() {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">Browse By Type Of Cake</Box>
            <Box className="static-txt">
              Establishments producing and selling flour-based food like cakes
              cookies, and pastries are what bakeries
            </Box>

            <Box className="static-boxes">
              <Box className="static-num">
                <img src="/icons/cake four.png" alt="" />
                <Box className="static-text">Cupcakes</Box>
              </Box>

              <Box className="static-num">
                <img width={"130px"} src="/icons/cake four.png" alt="" />
                <Box className="static-text">Cupcakes</Box>
              </Box>

              <Box className="static-num">
                <img width={"130px"} src="/icons/cake four.png" alt="" />
                <Box className="static-text">Cupcakes</Box>
              </Box>

              <Box className="static-num">
                <img width={"130px"} src="/icons/cake four.png" alt="" />
                <Box className="static-text">Cupcakes</Box>
              </Box>

              <Box className="static-num">
                <img width={"130px"} src="/icons/cake four.png" alt="" />
                <Box className="static-text">Cupcakes</Box>
              </Box>

              <Box className="static-num">
                <img width={"130px"} src="/icons/cake four.png" alt="" />
                <Box className="static-text">Cupcakes</Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
