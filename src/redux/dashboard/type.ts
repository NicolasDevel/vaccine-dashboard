import {IVaccinateCountry} from "../../models/vaccinate";

export enum ActionKeys {
    SET_DATA_VACCINATE_COUNTRY = 'SET_DATA_VACCINATE_COUNTRY',
    SET_ERROR = 'SET_ERROR',
}

export interface setDataVaccinateCountry {
    type                :   ActionKeys.SET_DATA_VACCINATE_COUNTRY,
    vaccinateCountry    :   IVaccinateCountry
}

export interface setError {
    type    :   ActionKeys.SET_ERROR,
    error   :   string,
}

export type DashboardActions = setDataVaccinateCountry | setError;