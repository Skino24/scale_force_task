export interface ICountry {
    capitalName: string,
    code: string,
    flag: string,
    name: string,
    population: Number,
    region: string,
    subregion: string;
}

export interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}