export interface IVaccinateCountry {
    country:  string;
    iso_code: string;
    data:     Datum[];
}

export interface Datum {
    date:                                 string;
    total_vaccinations?:                  number;
    people_vaccinated?:                   number;
    total_vaccinations_per_hundred?:      number;
    people_vaccinated_per_hundred?:       number;
    daily_vaccinations?:                  number;
    daily_vaccinations_per_million?:      number;
    daily_vaccinations_raw?:              number;
    people_fully_vaccinated?:             number;
    people_fully_vaccinated_per_hundred?: number;
}
