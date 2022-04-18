import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { countries } from "../configuration/contants";
import { FilterOptionsState } from "@mui/material";

export interface ICountrySelectProps {
  setCountryText: (value: String) => void;
}

const CountrySelect: React.FunctionComponent<ICountrySelectProps> = (props) => {
  const OPTIONS_LIMIT = 10;
  const defaultFilterOptions = createFilterOptions();

  const filterOptions = (
    options: unknown[],
    state: FilterOptionsState<unknown>
  ) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Autocomplete
      freeSolo
      disableClearable
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      options={countries}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a country"
          onChange={(e) => props.setCountryText(e.target.value)}
        />
      )}
      onSelect={(e) => {
        const target = e.target as HTMLInputElement;
        props.setCountryText(target.value);
      }}
    />
  );
};

export default CountrySelect;
