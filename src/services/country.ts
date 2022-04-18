import { ICountry } from "../types/country";
import http from "../configuration/requests";
import { CustomError } from "../types/default";
import { trackPromise } from "react-promise-tracker";

const getAllCountries = async (): Promise<ICountry[]> => {
    try {
        const res = await trackPromise(http.get('/countries'));
        return res.data;
    }
    catch (e) {
        const error = e as CustomError;
        throw new Error(error.response.data.message);
    }
};

const getCountryByName = async (name: String): Promise<ICountry[]> => {
    try {
        const res = await trackPromise(http.get(`/countries/${name}`));
        return res.data;
    }
    catch (e) {
        const error = e as CustomError;
        throw new Error(error.response.data.message);
    }
};

const CountryService = {
    getAllCountries,
    getCountryByName,
};

export default CountryService;