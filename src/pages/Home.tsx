import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CountrySelect from "../components/countrySelect";
import CountryService from "../services/country";
import CircularProgress from "@mui/material/CircularProgress";
import { ICountry } from "../types/country";
import { usePromiseTracker } from "react-promise-tracker";
import { debounce } from "lodash";
import CustomModal from "../components/customModal";
import CountryItem from "../components/countryItem";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [openDetails, setOpenDetails] = useState(false);
  const { promiseInProgress } = usePromiseTracker();

  const onLongPress = () => setOpenDetails(true);

  const handleCountryTextChange = debounce(async (value: String) => {
    if (value.length === 0) {
      setInitialCountries();
    }
    if (value.length > 0) {
      const countries = await CountryService.getCountryByName(value);
      setCountries(countries);
    }
  }, 300);

  const setInitialCountries = async () => {
    const countries = await CountryService.getAllCountries();
    setCountries(countries);
  };

  useEffect(() => {
    setInitialCountries();
  }, []);

  return (
    <Box>
      <Box margin={4}>
        <CountrySelect setCountryText={handleCountryTextChange} />
      </Box>
      {countries.length === 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          No countries found
        </Box>
      )}
      {promiseInProgress ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
          paddingTop={2}
        >
          {countries.map((country, index) => (
            <CountryItem
              selectCountry={() => setSelectedCountry(country)}
              country={country}
              onLongPress={onLongPress}
            />
          ))}
        </Grid>
      )}
      <CustomModal
        onClose={() => setOpenDetails(false)}
        isOpen={openDetails}
        country={selectedCountry}
      />
    </Box>
  );
};

export default HomePage;
