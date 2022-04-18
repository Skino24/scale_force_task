import { Box, Button } from "@mui/material";
import { useLongPress } from "use-long-press";
import { ICountry } from "../types/country";

const containerStyles = {
  m: 1,
  border: 1,
  borderColor: "error.main",
  borderRadius: 16,
  height: 50,
  backgroundColor: "#D0D0D0",
};

const buttonStyles = {
  display: "flex",
  width: 350,
  justifyContent: "space-between",
  alignItems: "center",
  color: "#000000",
};

export interface ICountryItem {
  selectCountry: () => void;
  country: ICountry;
  onLongPress: () => void;
}

const CountryItem: React.FunctionComponent<ICountryItem> = (props) => {
  const openModal = useLongPress(props.onLongPress);

  return (
    <Box onMouseDown={props.selectCountry} sx={{ ...containerStyles }}>
      <Button {...openModal}>
        <Box sx={{ ...buttonStyles }}>
          <Box
            component="img"
            sx={{
              height: 40,
              width: 40,
              borderRadius: "50%",
            }}
            src={props.country.flag}
          />
          <Box fontSize={16}>{props.country.name}</Box>
        </Box>
      </Button>
    </Box>
  );
};

export default CountryItem;
